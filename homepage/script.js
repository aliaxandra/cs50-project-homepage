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
    let editButton = document.querySelector('#editButton');
    let editForm = document.querySelector('#editForm');

    editButton.onclick = function () {
        editForm.classList.remove('hide');
        editButton.classList.add('hide');
    }
    
    if (!localStorage.getItem('statusNew')) {
        populateStorage();
    }
    else {
        setStatus();
    }
    
    function populateStorage() {
        localStorage.setItem('statusKey', document.querySelector('#statusNew').value);
        setStatus();
        editForm.classList.add('hide');
        editButton.classList.remove('hide');
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