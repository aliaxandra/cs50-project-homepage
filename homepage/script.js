// About alert
document.querySelector("#about").onclick = function () {
    alert("About Text");
}

// Status change
let statusResult = document.querySelector('#statusResult');
var statusNew = document.querySelector('#statusNew');

if (!localStorage.getItem('statusNew')) {
    populateStorage();
} 
else 
{
    setStatus();
}

function populateStorage()
{
    localStorage.setItem('statusKey', document.querySelector('#statusNew').value);
    setStatus();
}

function setStatus()
{
    var currentStatus = localStorage.getItem('statusKey');
    statusResult.innerHTML = currentStatus;
}

statusNew.onchange = populateStorage;


// let statusResult = document.querySelector('#statusResult');

// function editStatus() {
    
//     if (typeof (Storage) !== "undefined") {
        
//         var statusNew = document.querySelector('#statusNew').value;
//         localStorage.setItem("statusKey", statusNew);
//         document.querySelector('#statusResult').innerHTML = localStorage.getItem("statusKey");

//     } else {

//         statusResult.innerHTML = "Sorry, your browser does not support web storage..."
//     }
    
// }

// Today date
let today = new Date();
document.querySelector("#today").innerHTML = today.toDateString();

// Done button
document.querySelector("#done").onclick = function() {
    document.querySelector("#encouraging").innerHTML = 'Good job!';
}