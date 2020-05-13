// About alert
document.querySelector("#about").onclick = function () {
    alert("About Text");
}

// Status change
let statusResult = document.querySelector('#statusResult');
let statusNew = document.querySelector('#statusNew');
let statusSubmit = document.querySelector('#statusSubmit');

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

statusSubmit.onclick = populateStorage;

// Today date
let today = new Date();
document.querySelector("#today").innerHTML = today.toDateString();

// Done button
document.querySelector("#done").onclick = function() {
    document.querySelector("#encouraging").innerHTML = 'Good job!';
}