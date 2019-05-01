using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Dynamic;
using MalariaAPI2.Models;

namespace MalariaAPI2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LogedInController : ApiController
    {
        private Malaria_DBEntities db = new Malaria_DBEntities();
        [System.Web.Mvc.Route("api/LogedIn")]
        [HttpGet]
        public HttpResponseMessage LogedIn([FromUri] Medical_Proffesionals user)
        {
            if (db.Medical_Proffesionals.Where(zz => zz.MP_Email == user.MP_Email && zz.MP_Password == user.MP_Password).Count() == 1)
            {
                List<dynamic> uselit = new List<dynamic>();
                dynamic user1 = new ExpandoObject();
                user1.Logedin = true;
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
    }
}
