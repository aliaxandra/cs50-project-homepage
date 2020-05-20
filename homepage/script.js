editStatus();
editDate();
setTodayDate();

// About alert
document.querySelector("#about").onclick = function () {
    alert("About Text");
}

// Today date
function setTodayDate()
{
    let today = new Date();
    let todayDate = today.toDateString();
    return todayDate;
}

// Set today date
document.querySelector("#today").innerHTML = setTodayDate();

// Status button
function editStatus() {
    
    let statusResult = document.querySelector('#statusResult');
    let statusSubmit = document.querySelector('#statusSubmit');

    // Open Edit form on Edit button
    let editButton = document.querySelector('#editButton');
    let editForm = document.querySelector('#editForm');
    editButton.onclick = function () {
        editForm.classList.remove('hide');
        editButton.classList.add('hide');
    }
    
    // Check whether we have stored string in local storage
    if (!localStorage.getItem('statusResult')) {
        populateStorage();
    }
    else {
        setStorage();
    }
    
    // Store the string and show new status
    function populateStorage() 
    {
        // Store key/value pair
        localStorage.setItem('statusResult', document.querySelector('#statusNew').value);
        setStorage();

        // Hide Edit form, show Edit button
        editForm.classList.add('hide');
        editButton.classList.remove('hide');
    }
    
    // Get the string from local storage and show in the Status 
    function setStorage() 
    {
        // Get value by key
        let currentStatus = localStorage.getItem('statusResult');

        // Check is string is empty or not
        if (currentStatus == ""){
            // If string is empty - do nothing to Status
            editForm.classList.add('hide');
            editButton.classList.remove('hide');
        }
        else {
            // If string isn't empty - show it in Status
            document.querySelector('#statusResult').innerHTML = currentStatus;   
            statusResult.innerHTML = currentStatus;  
        }
    }
    
    // Store new string on click Submit button
    statusSubmit.onclick = populateStorage();
}

// Done button

function editDate() {

    let doneResult = document.querySelector('#doneResult');
    let doneButton = document.querySelector('#doneButton');
    

    // Check whether we have stored string in local storage
    if (!localStorage.getItem('dateNew')) {
        populateStorage();
    }
    else {
        setStorage();
    }

    // Store the string and show new date
    function populateStorage()
    {
        let dateNew = setTodayDate();
        // Store key/value pair
        localStorage.setItem('dateKey', dateNew);
        setStorage();
    }

    // Get the string from local storage and show in the date done
    function setStorage()
    {
        // Get value by key
        let currentDate = localStorage.getItem('dateKey');
        doneResult.innerHTML = currentDate;
        
    }

    doneButton.onclick = populateStorage();

}