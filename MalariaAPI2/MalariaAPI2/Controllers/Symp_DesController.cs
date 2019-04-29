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
    public class Symp_DesController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/Symp_Des
        public List<dynamic> GetSymp_Des()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Symp_Des> SD1 = db.Symp_Des.Include(aa => aa.Symptom).Include(zz => zz.Desease).ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Symp_Des c in SD1)
            {
                dynamic m = new ExpandoObject();
                m.Symp_Des_ID = c.Symp_Des_ID;
                m.Des_ID = c.Des_ID;
                m.Symp_ID = c.Symp_ID;
                m.Des_Name = c.Desease.Des_Name;
                m.Symp_Desc = c.Symptom.Symp_Desc;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Symp_Des/5
        [ResponseType(typeof(Symp_Des))]
        public IHttpActionResult GetSymp_Des(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Symp_Des symp_Des = db.Symp_Des.Find(id);
            if (symp_Des == null)
            {
                return NotFound();
            }

            return Ok(symp_Des);
        }

        // PUT: api/Symp_Des/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSymp_Des(int id, Symp_Des symp_Des)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != symp_Des.Symp_Des_ID)
            {
                return BadRequest();
            }

            db.Entry(symp_Des).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Symp_DesExists(id))
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

        // POST: api/Symp_Des
        [ResponseType(typeof(Symp_Des))]
        public IHttpActionResult PostSymp_Des(Symp_Des symp_Des)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Symp_Des.Add(symp_Des);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = symp_Des.Symp_Des_ID }, symp_Des);
        }

        // DELETE: api/Symp_Des/5
        [ResponseType(typeof(Symp_Des))]
        public IHttpActionResult DeleteSymp_Des(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Symp_Des symp_Des = db.Symp_Des.Find(id);
            if (symp_Des == null)
            {
                return NotFound();
            }

            db.Symp_Des.Remove(symp_Des);
            db.SaveChanges();

            return Ok(symp_Des);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Symp_DesExists(int id)
        {
            return db.Symp_Des.Count(e => e.Symp_Des_ID == id) > 0;
        }
    }
}