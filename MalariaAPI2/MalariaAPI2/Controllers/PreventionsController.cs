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
using System.Dynamic;
using System.Web.Http.Cors;

namespace MalariaAPI2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PreventionsController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/Preventions
        public List<dynamic> GetPreventions()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Prevention> prev1 = db.Preventions.ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Prevention c in prev1)
            {
                dynamic m = new ExpandoObject();
                m.Prev_ID = c.Prev_ID;
                m.Prev_Desc = c.Prev_Desc;
                m.Prev_Type = c.Prev_Type;
                m.Des_ID = c.Des_ID;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Preventions/5
        [ResponseType(typeof(Prevention))]
        public IHttpActionResult GetPrevention(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Prevention prevention = db.Preventions.Find(id);
            if (prevention == null)
            {
                return NotFound();
            }

            return Ok(prevention);
        }

        // PUT: api/Preventions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPrevention(int id, Prevention prevention)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prevention.Prev_ID)
            {
                return BadRequest();
            }

            db.Entry(prevention).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PreventionExists(id))
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

        // POST: api/Preventions
        [ResponseType(typeof(Prevention))]
        public IHttpActionResult PostPrevention(Prevention prevention)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Preventions.Add(prevention);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = prevention.Prev_ID }, prevention);
        }

        // DELETE: api/Preventions/5
        [ResponseType(typeof(Prevention))]
        public IHttpActionResult DeletePrevention(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Prevention prevention = db.Preventions.Find(id);
            if (prevention == null)
            {
                return NotFound();
            }

            db.Preventions.Remove(prevention);
            db.SaveChanges();

            return Ok(prevention);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PreventionExists(int id)
        {
            return db.Preventions.Count(e => e.Prev_ID == id) > 0;
        }
    }
}