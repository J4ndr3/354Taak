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
    public class SymptomsController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/Symptoms
        public List<dynamic> GetSymptoms()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Symptom> Sym1 = db.Symptoms.ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Symptom c in Sym1)
            {
                dynamic m = new ExpandoObject();
                m.Symp_ID = c.Symp_ID;
                m.Symp_Desc = c.Symp_Desc;
                m.Symp_Type = c.Symp_Type;
                m.Symp_Duration = c.Symp_Duration;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Symptoms/5
        [ResponseType(typeof(Symptom))]
        public IHttpActionResult GetSymptom(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Symptom symptom = db.Symptoms.Find(id);
            if (symptom == null)
            {
                return NotFound();
            }

            return Ok(symptom);
        }

        // PUT: api/Symptoms/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSymptom(int id, Symptom symptom)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != symptom.Symp_ID)
            {
                return BadRequest();
            }

            db.Entry(symptom).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SymptomExists(id))
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

        // POST: api/Symptoms
        [ResponseType(typeof(Symptom))]
        public IHttpActionResult PostSymptom(Symptom symptom)
        {
            db.Configuration.ProxyCreationEnabled = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Symptoms.Add(symptom);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = symptom.Symp_ID }, symptom);
        }

        // DELETE: api/Symptoms/5
        [ResponseType(typeof(Symptom))]
        public IHttpActionResult DeleteSymptom(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            Symptom symptom = db.Symptoms.Find(id);
            if (symptom == null)
            {
                return NotFound();
            }

            db.Symptoms.Remove(symptom);
            db.SaveChanges();

            return Ok(symptom);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SymptomExists(int id)
        {
            return db.Symptoms.Count(e => e.Symp_ID == id) > 0;
        }
    }
}