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
    public class Medical_ProffesionalsController : ApiController
    {
        private MalariaDBEntities1 db = new MalariaDBEntities1();

        // GET: api/Medical_Proffesionals
        public IQueryable<Medical_Proffesionals> GetMedical_Proffesionals()
        {
            return db.Medical_Proffesionals;
        }

        // GET: api/Medical_Proffesionals/5
        [ResponseType(typeof(Medical_Proffesionals))]
        public IHttpActionResult GetMedical_Proffesionals(int id)
        {
            Medical_Proffesionals medical_Proffesionals = db.Medical_Proffesionals.Find(id);
            if (medical_Proffesionals == null)
            {
                return NotFound();
            }

            return Ok(medical_Proffesionals);
        }

        // PUT: api/Medical_Proffesionals/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMedical_Proffesionals(int id, Medical_Proffesionals medical_Proffesionals)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != medical_Proffesionals.MP_ID)
            {
                return BadRequest();
            }

            db.Entry(medical_Proffesionals).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Medical_ProffesionalsExists(id))
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

        // POST: api/Medical_Proffesionals
        [ResponseType(typeof(Medical_Proffesionals))]
        public IHttpActionResult PostMedical_Proffesionals(Medical_Proffesionals medical_Proffesionals)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Medical_Proffesionals.Add(medical_Proffesionals);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = medical_Proffesionals.MP_ID }, medical_Proffesionals);
        }

        // DELETE: api/Medical_Proffesionals/5
        [ResponseType(typeof(Medical_Proffesionals))]
        public IHttpActionResult DeleteMedical_Proffesionals(int id)
        {
            Medical_Proffesionals medical_Proffesionals = db.Medical_Proffesionals.Find(id);
            if (medical_Proffesionals == null)
            {
                return NotFound();
            }

            db.Medical_Proffesionals.Remove(medical_Proffesionals);
            db.SaveChanges();

            return Ok(medical_Proffesionals);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Medical_ProffesionalsExists(int id)
        {
            return db.Medical_Proffesionals.Count(e => e.MP_ID == id) > 0;
        }
    }
}