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
    public class RP_DesController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();

        // GET: api/RP_Des
        public List<dynamic> GetRP_Des()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<RP_Des> RPD1 = db.RP_Des.Include(aa => aa.Risk_Period).Include(zz => zz.Desease).ToList();
            List<dynamic> toReturn = new List<dynamic>();
            foreach (RP_Des c in RPD1)
            {
                dynamic m = new ExpandoObject();
                m.RP_Des_ID = c.RP_Des_ID;
                m.Des_ID = c.Des_ID;
                m.RiskP_ID = c.RiskP_ID;
                m.Des_Name = c.Desease.Des_Name;
                m.RiskP_Desc = c.Risk_Period.RiskP_Desc;
                toReturn.Add(m);
            }
            return toReturn;
        }

        // GET: api/RP_Des/5
        [ResponseType(typeof(RP_Des))]
        public IHttpActionResult GetRP_Des(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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
            db.Configuration.ProxyCreationEnabled = false;
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