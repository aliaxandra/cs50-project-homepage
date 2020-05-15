editStatus()

// About alert
document.querySelector("#about").onclick = function () {
    alert("About Text");
}

// Today date
let today = new Date();
document.querySelector("#today").innerHTML = today.toDateString();

// editStatus - Status change
function editStatus() {
    
    let statusResult = document.querySelector('#statusResult');
    let statusSubmit = document.querySelector('#statusSubmit');
    
    if (!localStorage.getItem('statusNew')) {
        populateStorage();
    }
    else {
        setStatus();
    }
    
    function populateStorage() {
        localStorage.setItem('statusKey', document.querySelector('#statusNew').value);
        setStatus();
    }
    
    function setStatus() {
        var currentStatus = localStorage.getItem('statusKey');
        statusResult.innerHTML = currentStatus;   
    }
    
    statusSubmit.onclick = populateStorage;
}

// Done button

document.querySelector("#done").onclick = function() {
    document.querySelector("#encouraging").innerHTML = 'Good job!';
}