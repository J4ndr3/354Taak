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
    public class Symp_DesController : ApiController
    {
        private MalariaDBEntities1 db = new MalariaDBEntities1();

        // GET: api/Symp_Des
        public IQueryable<Symp_Des> GetSymp_Des()
        {
            return db.Symp_Des;
        }

        // GET: api/Symp_Des/5
        [ResponseType(typeof(Symp_Des))]
        public IHttpActionResult GetSymp_Des(int id)
        {
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