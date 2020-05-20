editStatus()

// About alert
document.querySelector("#about").onclick = function () {
    alert("About Text");
}

// Today date
let today = new Date();
document.querySelector("#today").innerHTML = today.toDateString();

// Status button
function editStatus() {
    
    let statusResult = document.querySelector('#statusResult');
    let statusSubmit = document.querySelector('#statusSubmit');
    let statusNew = document.querySelector('#statusNew');
    let editButton = document.querySelector('#editButton');
    let editForm = document.querySelector('#editForm');

    // Open Edit form on Edit button
    editButton.onclick = function () {
        editForm.classList.remove('hide');
        editButton.classList.add('hide');
    }
    
    // Check whether we have stored string in local storage
    if (!localStorage.getItem('statusNew')) {
        populateStorage();
    }
    else {
        setStatus();
    }
    
    // Store the string and show new status
    function populateStorage() {
        // Store key/value pair
        localStorage.setItem('statusKey', statusNew.value);
        setStatus();
        // Hide Edit form, show Edit button
        editForm.classList.add('hide');
        editButton.classList.remove('hide');
    }
    
    // Get the string from local storage and show in the Status 
    function setStatus() {

        // Get value by key
        let currentStatus = localStorage.getItem('statusKey');

        // Check is string is empty or not
        if (currentStatus == ""){
            // If string is empty - do nothing to Status
            editForm.classList.add('hide');
            editButton.classList.remove('hide');
        }
        else {
            // If string isn't empty - show it in Status
            statusResult.innerHTML = currentStatus;   
        }
    }
    
    // Store new string on click Submit button
    statusSubmit.onclick = populateStorage;
}

// Done button
document.querySelector("#done").onclick = function() {
    document.querySelector("#encouraging").innerHTML = today.toDateString();
}