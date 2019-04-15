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
using MalariaAPI.Models;

namespace MalariaAPI.Controllers
{
    public class RP_DesController : ApiController
    {
        private MalariaDBEntities1 db = new MalariaDBEntities1();

        // GET: api/RP_Des
        public IQueryable<RP_Des> GetRP_Des()
        {
            return db.RP_Des;
        }

        // GET: api/RP_Des/5
        [ResponseType(typeof(RP_Des))]
        public IHttpActionResult GetRP_Des(int id)
        {
            RP_Des rP_Des = db.RP_Des.Find(id);
            if (rP_Des == null)
            {
                return NotFound();
            }

            return Ok(rP_Des);
        }

        // PUT: api/RP_Des/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRP_Des(int id, RP_Des rP_Des)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rP_Des.RP_Des_ID)
            {
                return BadRequest();
            }

            db.Entry(rP_Des).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RP_DesExists(id))
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

        // POST: api/RP_Des
        [ResponseType(typeof(RP_Des))]
        public IHttpActionResult PostRP_Des(RP_Des rP_Des)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RP_Des.Add(rP_Des);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = rP_Des.RP_Des_ID }, rP_Des);
        }

        // DELETE: api/RP_Des/5
        [ResponseType(typeof(RP_Des))]
        public IHttpActionResult DeleteRP_Des(int id)
        {
            RP_Des rP_Des = db.RP_Des.Find(id);
            if (rP_Des == null)
            {
                return NotFound();
            }

            db.RP_Des.Remove(rP_Des);
            db.SaveChanges();

            return Ok(rP_Des);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RP_DesExists(int id)
        {
            return db.RP_Des.Count(e => e.RP_Des_ID == id) > 0;
        }
    }
}