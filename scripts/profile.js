function cancelapp(){
            const confirmMessage = "Are you sure you want to cancel your appointment?";

    if (confirm(confirmMessage)){
        window.sessionStorage.removeItem("log");
        window.location.reload();
    }
        }


        if (window.sessionStorage.getItem("log") !== null) {

            
            // document.getElementById("ap").classList.remove("d-none");
            // document.getElementById("tr").classList.remove("d-none");
            const apElements= document.querySelectorAll("#ap");
            document.querySelectorAll("#ap").forEach(apElement => apElement.classList.remove("d-none"));

            const trElements= document.querySelectorAll("#tr");
            document.querySelectorAll("#tr").forEach(trElement => trElement.classList.remove("d-none"));

// get log and parse
         var l = window.sessionStorage.getItem("log");
         var string = JSON.parse(l) //bey2asemhom
// get services
        var serv = string.service
         var infor = document.createTextNode(serv);
// put services in table         
        document.getElementById("service").textContent = infor.textContent

// get branch
         var branch = string.branch
          infor = document.createTextNode(branch);
// put branch in table         
         document.getElementById("branch").appendChild(infor)

 // get date
 var date = string.date
          infor = document.createTextNode(date);
// put branch in table         
         document.getElementById("date").textContent = infor.textContent
         
// get time
var time = string.time
          infor = document.createTextNode(time);
// put branch in table         
         document.getElementById("time").textContent = infor.textContent         





} else {
  // The sessionStorage does not contain anything.
}
        
   