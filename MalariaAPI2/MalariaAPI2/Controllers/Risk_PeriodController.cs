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
    public class Risk_PeriodController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/Risk_Period
        public List<dynamic> GetRisk_Period()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Risk_Period> RP1 = db.Risk_Period.ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (Risk_Period c in RP1)
            {
                dynamic m = new ExpandoObject();
                m.RiskP_ID = c.RiskP_ID;
                m.RiskP_Desc = c.RiskP_Desc;
                m.RiskP_Type = c.RiskP_Type;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/Risk_Period/5
        [ResponseType(typeof(Risk_Period))]
        public IHttpActionResult GetRisk_Period(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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