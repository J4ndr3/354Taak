using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Dynamic;
using MalariaAPI2.Models;
using System.Web.Http.Cors;

namespace MalariaAPI2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();
        [System.Web.Mvc.Route("api/Login")]
        [HttpGet]
        public HttpResponseMessage Login([FromUri] Medical_Proffesionals userDet)
        {
            bool UseInDb = false;
            if (db.Medical_Proffesionals.Where(zz => zz.MP_Email == userDet.MP_Email && zz.MP_Password == userDet.MP_Password).Count() == 1)
            {
                UseInDb = true;
            }
            if (UseInDb)
            {
                userDet = db.Medical_Proffesionals.Where(zz => zz.MP_Email == userDet.MP_Email).FirstOrDefault();
                RefreshGUID(userDet);
                userDet = db.Medical_Proffesionals.Where(zz => zz.MP_Email == userDet.MP_Email).FirstOrDefault();
                List<dynamic> uselit = new List<dynamic>();
                dynamic user1 = new ExpandoObject();
                user1.GUID = userDet.GUID;
                user1.Correct = true;
                uselit.Add(user1);
                var response1 = Request.CreateResponse(HttpStatusCode.OK, uselit);
                response1.Headers.Add("Access-Control-Allow-Origin", "*");
                return response1;

            }
            else
            {
                var response = Request.CreateResponse(HttpStatusCode.OK, "Access not allowed");
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                return response;
            }

        }
        public void RefreshGUID(Medical_Proffesionals use)
        {
            db.Configuration.ProxyCreationEnabled = false;
            use.GUID = Guid.NewGuid();
            use.GUIDExp = DateTime.Now.AddMinutes(30);
            var guids = db.Medical_Proffesionals.Where(zz => zz.GUID == use.GUID).Count();
            if (guids > 0)
                RefreshGUID(use);
            else
            {
                var u = db.Medical_Proffesionals.Where(zz => zz.MP_Email == use.MP_Email).FirstOrDefault();
                db.Entry(u).CurrentValues.SetValues(use);
                db.SaveChanges();
            }
        }


    }
}
