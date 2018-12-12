console.log("csc");
$(document).ready(function() {
    "use strict";
     $.ajax({
         type: "GET",
         url: "data.csv",
         dataType: "text",
         success: function(data) {processData(data);}
      });
 });
 
 function processData(icd10Codes) {
     "use strict";
     var input = $.csv.toArrays(icd10Codes);
     $("#test").append(input);
 }

 