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
    public class DeseasesController : ApiController
    {
        private MalariaDBEntities1 db = new MalariaDBEntities1();

        // GET: api/Deseases
        public IQueryable<Desease> GetDeseases()
        {
            return db.Deseases;
        }

        // GET: api/Deseases/5
        [ResponseType(typeof(Desease))]
        public IHttpActionResult GetDesease(int id)
        {
            Desease desease = db.Deseases.Find(id);
            if (desease == null)
            {
                return NotFound();
            }

            return Ok(desease);
        }

        // PUT: api/Deseases/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDesease(int id, Desease desease)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != desease.Des_ID)
            {
                return BadRequest();
            }

            db.Entry(desease).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeseaseExists(id))
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

        // POST: api/Deseases
        [ResponseType(typeof(Desease))]
        public IHttpActionResult PostDesease(Desease desease)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Deseases.Add(desease);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = desease.Des_ID }, desease);
        }

        // DELETE: api/Deseases/5
        [ResponseType(typeof(Desease))]
        public IHttpActionResult DeleteDesease(int id)
        {
            Desease desease = db.Deseases.Find(id);
            if (desease == null)
            {
                return NotFound();
            }

            db.Deseases.Remove(desease);
            db.SaveChanges();

            return Ok(desease);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DeseaseExists(int id)
        {
            return db.Deseases.Count(e => e.Des_ID == id) > 0;
        }
    }
}