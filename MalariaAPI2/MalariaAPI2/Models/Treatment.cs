//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MalariaAPI2.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Treatment
    {
        public int Treat_ID { get; set; }
        public string Treat_Desc { get; set; }
        public string Treat_Type { get; set; }
        public Nullable<int> Des_ID { get; set; }
    
        public virtual Desease Desease { get; set; }
    }
}
