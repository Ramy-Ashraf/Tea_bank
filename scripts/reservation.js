serviceDate.min = new Date().toISOString().split("T")[0];



    document.getElementById("myform").addEventListener("submit", function(event) {
    var checkboxes = document.querySelectorAll(".form-check-input");
    var checkboxError = document.getElementById("checkboxError");
    
    var isChecked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    
    if (!isChecked) {
        checkboxError.textContent = "Please select at least one service.";
        event.preventDefault(); // Prevent form submission
    } else {
        checkboxError.textContent = ""; // Clear error message

        show();
    }
});

function res(){
    document.getElementById("popupCard").style.display = "none"
}
function res2(){
    document.getElementById("popupCard2").style.display = "none"
}
function home(){
    window.location.href= "index.html"
}
function cancel(){
    window.location.href= "index.html"
}
function confirm2(){
    //document.getElementById("popupCard2").style.display = "none";
    $(document).ready(function(){
    var Att= document.getElementById("popupCard2")
$(Att).toggle(function(){
  $(this).animate()
})

  })

    document.getElementById("popupCard3").style.display = "block";
  }

function confirm(){
        document.getElementById("popupCard").style.display = "none";
        
    $(document).ready(function(){
    var Att= document.getElementById("popupCard2")
$(Att).toggle(function(){
  $(this).animate()
})

  })
}
    

function show(){
    const s=[]
    if(a.checked){
          const a =  "Apply for a personal loan"
          s.push(a)
        }
        if(b.checked ){
          const b =  "Get a Safe Deposit Box"
          s.push(b)
        }
        if(c.checked){
          const c = "Deposit cash"
          s.push(c)
        }if(d.checked){
          const d = " Investment and Retirement"
          s.push(d) 
        }
        if(e.checked){
          const e = "other"
          s.push(e) 
}

    var branch = document.getElementById("sel1").value;
    var date = document.getElementById("serviceDate").value;
    var time = document.getElementById("sel2").value;

        const log = {
        service: s,
        branch: branch,
        date:date,
        time:time
    }

    window.sessionStorage.setItem("log",JSON.stringify(log)); 

   
    
document.getElementById("hcard").innerHTML = "Your reservation handles the services: "+ s +
   "<br>"+"Date: "+ date +"<br>"+"Timeslot: "+ time +"<br>"+ "Branch: " + branch
   document.getElementById("popupCard").style.display = "block";
   event.preventDefault();
}  
