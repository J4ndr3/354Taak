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
using System.Web.Http.Cors;
using MalariaAPI.Models;
using System.Dynamic;

namespace MalariaAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CausController : ApiController
    {
        private MalariaDBEntities1 db = new MalariaDBEntities1();

        // GET: api/Caus
        public List<dynamic> GetCauses()
        {
            
            db.Configuration.ProxyCreationEnabled = false;
            List<Caus> cause1 = db.Causes.Include(zz => zz.Desease).ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Caus c in cause1)
            {
                dynamic m = new ExpandoObject();
                m.Cause_ID = c.Cause_ID;
                m.Cause_Desc = c.Cause_Desc;
                m.Des_ID = c.Des_ID;
                if (c.Desease != null)
                {
                    m.Des_Name = c.Desease.Des_Name;
                }
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Caus/5
        [ResponseType(typeof(Caus))]
        public IHttpActionResult GetCaus(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Caus caus = db.Causes.Find(id);
            if (caus == null)
            {
                return NotFound();
            }

            return Ok(caus);
        }

        // PUT: api/Caus/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCaus(int id, Caus caus)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != caus.Cause_ID)
            {
                return BadRequest();
            }

            db.Entry(caus).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CausExists(id))
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

        // POST: api/Caus
        [ResponseType(typeof(Caus))]
        public IHttpActionResult PostCaus(Caus caus)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Causes.Add(caus);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = caus.Cause_ID }, caus);
        }

        // DELETE: api/Caus/5
        [ResponseType(typeof(Caus))]
        public IHttpActionResult DeleteCaus(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Caus caus = db.Causes.Find(id);
            if (caus == null)
            {
                return NotFound();
            }

            db.Causes.Remove(caus);
            db.SaveChanges();

            return Ok(caus);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CausExists(int id)
        {
            return db.Causes.Count(e => e.Cause_ID == id) > 0;
        }
    }
}