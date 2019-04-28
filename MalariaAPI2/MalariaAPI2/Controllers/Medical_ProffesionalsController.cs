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
    public class Medical_ProffesionalsController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/Medical_Proffesionals
        public List<dynamic> GetMedical_Proffesionals()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Medical_Proffesionals> Med1 = db.Medical_Proffesionals.ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Medical_Proffesionals c in Med1)
            {
                dynamic m = new ExpandoObject();
                m.MP_ID = c.MP_ID;
                m.MP_Name = c.MP_Name;
                m.MP_Surname = c.MP_Surname;
                m.MP_Email = c.MP_Email;
                m.MP_Password = c.MP_Password;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Medical_Proffesionals/5
        [ResponseType(typeof(Medical_Proffesionals))]
        public IHttpActionResult GetMedical_Proffesionals(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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