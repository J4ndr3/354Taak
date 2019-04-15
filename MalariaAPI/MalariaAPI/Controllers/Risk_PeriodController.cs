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
    public class Risk_PeriodController : ApiController
    {
        private MalariaDBEntities1 db = new MalariaDBEntities1();

        // GET: api/Risk_Period
        public IQueryable<Risk_Period> GetRisk_Period()
        {
            return db.Risk_Period;
        }

        // GET: api/Risk_Period/5
        [ResponseType(typeof(Risk_Period))]
        public IHttpActionResult GetRisk_Period(int id)
        {
            Risk_Period risk_Period = db.Risk_Period.Find(id);
            if (risk_Period == null)
            {
                return NotFound();
            }

            return Ok(risk_Period);
        }

        // PUT: api/Risk_Period/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRisk_Period(int id, Risk_Period risk_Period)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != risk_Period.RiskP_ID)
            {
                return BadRequest();
            }

            db.Entry(risk_Period).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Risk_PeriodExists(id))
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

        // POST: api/Risk_Period
        [ResponseType(typeof(Risk_Period))]
        public IHttpActionResult PostRisk_Period(Risk_Period risk_Period)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Risk_Period.Add(risk_Period);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = risk_Period.RiskP_ID }, risk_Period);
        }

        // DELETE: api/Risk_Period/5
        [ResponseType(typeof(Risk_Period))]
        public IHttpActionResult DeleteRisk_Period(int id)
        {
            Risk_Period risk_Period = db.Risk_Period.Find(id);
            if (risk_Period == null)
            {
                return NotFound();
            }

            db.Risk_Period.Remove(risk_Period);
            db.SaveChanges();

            return Ok(risk_Period);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Risk_PeriodExists(int id)
        {
            return db.Risk_Period.Count(e => e.RiskP_ID == id) > 0;
        }
    }
}