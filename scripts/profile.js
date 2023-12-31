const inputs = document.querySelectorAll('.input')
const Edit = document.querySelector('#edit');
const Done = document.querySelector('#done');
const fields = document.querySelectorAll('.field')
const wrapDone = document.querySelector('.wrapDone')
const wrapEdit = document.querySelector('.wrapEdit')
const overlay = document.getElementById("overlay")
const overlay2 = document.getElementById("overlay2")
const overlay3 = document.getElementById("overlay3")
const overlay4 = document.getElementById("overlay4")
const verifyChangeAccount= document.querySelector('.verifyChangeAccount')
Done.addEventListener('click', (e) => {
        e.preventDefault();
        for (const [i, field] of fields.entries()) {
                fields[i].classList.toggle('d-none');
                inputs[i].classList.toggle('d-none');
        }
        wrapEdit.classList.toggle('d-none');
        wrapDone.classList.toggle('d-none');

})

function cancelapp() {
        const confirmMessage = "Are you sure you want to cancel your appointment?";

        if (confirm(confirmMessage)) {
                window.sessionStorage.removeItem("log");
                window.location.reload();
        }
}
function ValidateKey(e) {
        var keyCode = e.keyCode || e.which;
        var regex = /^[0-9]$/;
        return regex.test(String.fromCharCode(keyCode));
    }

if (window.sessionStorage.getItem("log") !== null) {


        // document.getElementById("ap").classList.remove("d-none");
        // document.getElementById("tr").classList.remove("d-none");
        const apElements = document.querySelectorAll("#ap");
        document.querySelectorAll("#ap").forEach(apElement => apElement.classList.remove("d-none"));

        const trElements = document.querySelectorAll("#tr");
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

function closeCard() {
        overlay.classList.toggle('d-none')
        overlay.classList.toggle('d-flex')
        // Enable scrolling
}

function verify(){
        for (const [i, field] of fields.entries()) {
                fields[i].classList.toggle('d-none');
                inputs[i].classList.toggle('d-none');
        }
        wrapEdit.classList.toggle('d-none');
        wrapDone.classList.toggle('d-none');
        overlay.classList.toggle('d-none');
        overlay.classList.toggle('d-flex');
}

function openCard(e) {
        e.preventDefault();
        overlay.classList.toggle('d-none')
        overlay.classList.toggle('d-flex');
        // Disable scrolling  
}
function openCardChange(e){
        e.preventDefault();
        overlay2.classList.toggle('d-none')
        overlay2.classList.toggle('d-flex');
}
function closeCardChange() {
        overlay2.classList.toggle('d-none')
        overlay2.classList.toggle('d-flex')
        // Enable scrolling
}
function openCardSelect(e){
        e.preventDefault();
        overlay3.classList.toggle('d-none')
        overlay3.classList.toggle('d-flex')   
}

function closeCardSelect() {
        overlay3.classList.toggle('d-none')
        overlay3.classList.toggle('d-flex')
        // Enable scrolling
}
function openCardNew(e){
        e.preventDefault();
        overlay4.classList.toggle('d-none')
        overlay4.classList.toggle('d-flex')   
}

function closeCardNew() {
        overlay4.classList.toggle('d-none')
        overlay4.classList.toggle('d-flex')
        // Enable scrolling
}

verifyChangeAccount.addEventListener('click',()=>{
        closeCardChange();
        openCardSelect(event);
})