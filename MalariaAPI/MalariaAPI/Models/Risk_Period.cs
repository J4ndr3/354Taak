//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MalariaAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Risk_Period
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Risk_Period()
        {
            this.RP_Des = new HashSet<RP_Des>();
        }
    
        public int RiskP_ID { get; set; }
        public string RiskP_Desc { get; set; }
        public string RiskP_Type { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RP_Des> RP_Des { get; set; }
    }
}
