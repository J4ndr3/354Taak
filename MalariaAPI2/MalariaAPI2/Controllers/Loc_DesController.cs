using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MalariaAPI2.Models;
using System.Web.Http.Cors;
using System.Dynamic;
namespace MalariaAPI2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class Loc_DesController : ApiController
    {
        
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/Loc_Des
        public List<dynamic> GetLoc_Des()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Loc_Des> LD1 = db.Loc_Des.Include(aa=> aa.Location).Include(zz => zz.Desease).ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Loc_Des c in LD1)
            {
                dynamic m = new ExpandoObject();
                m.Loc_Des_ID = c.Loc_Des_ID;
                m.Des_ID = c.Des_ID;
                m.Loc_ID = c.Loc_ID;
                m.Des_Name = c.Desease.Des_Name;
                m.Loc_Name = c.Location.Loc_Name;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Loc_Des/5
        [ResponseType(typeof(Loc_Des))]
        public IHttpActionResult GetLoc_Des(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Loc_Des loc_Des = db.Loc_Des.Find(id);
            if (loc_Des == null)
            {
                return NotFound();
            }

            return Ok(loc_Des);
        }

        // PUT: api/Loc_Des/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLoc_Des(int id, Loc_Des loc_Des)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != loc_Des.Loc_Des_ID)
            {
                return BadRequest();
            }

            db.Entry(loc_Des).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Loc_DesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Loc_Des
        [ResponseType(typeof(Loc_Des))]
        public IHttpActionResult PostLoc_Des(Loc_Des loc_Des)
        {
            //db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Loc_Des.Add(loc_Des);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = loc_Des.Loc_Des_ID }, loc_Des);
        }

        // DELETE: api/Loc_Des/5
        [ResponseType(typeof(Loc_Des))]
        public IHttpActionResult DeleteLoc_Des(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Loc_Des loc_Des = db.Loc_Des.Find(id);
            if (loc_Des == null)
            {
                return NotFound();
            }

            db.Loc_Des.Remove(loc_Des);
            db.SaveChanges();

            return Ok(loc_Des);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Loc_DesExists(int id)
        {
            return db.Loc_Des.Count(e => e.Loc_Des_ID == id) > 0;
        }
    }
}