
// ABOUT ALERT
document.querySelector("#about").onclick = function () {
    alert("About Text");
}




// TODAY DATE
let today = new Date();
let todayDate = today.toDateString();
document.querySelector("#today").innerHTML = todayDate;





// STATUS FORM

let editForm = document.querySelector('#editForm');
let editButton = document.querySelector('#editButton');

// Open Status Form on Edit button
editButton.onclick = function() 
{
    editForm.classList.remove('hide');
    editButton.classList.add('hide');
}

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('statusResult'))
{
    // Add the existing values to the storage
    populateStatus();
}
else
{
    // Update the page with the stored values
    setStatus();
}

// Setting values in storage
function populateStatus()
{
    // Check if Status value is empty
    if (document.querySelector('#statusNew').value == "")
    {
        // Then hide Form
        editForm.classList.add('hide');
        editButton.classList.remove('hide');
    }
    else
    {
        // If Status value is not empty - set key/value
        localStorage.setItem('statusResult', document.querySelector('#statusNew').value);
        
        // Update status
        setStatus();
    
        // Hide Edit form, show Edit button
        editForm.classList.add('hide');
        editButton.classList.remove('hide');

    }
}

// Get values from storage
function setStatus()
{
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    let currentStatus = localStorage.getItem('statusResult');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#statusResult').innerHTML = currentStatus;
}

// Handler to take data when pressed
document.querySelector('#statusSubmit').onclick = populateStatus;





// DONE BUTTON - LEARN - CS50s

// Check whether the storage object has already been populted
if(!localStorage.getItem('doneResultLearnCS50'))
{
    // If not - add the existing values to the storage when click done button
    document.querySelector('#doneButtonLearnCS50').onclick = populateDoneLearnCS50;
}
else
{
    // Update the page with the stored values
    setDoneLearnCS50();
}

// Set value in storage
function populateDoneLearnCS50()
{
    // Set key/value
    localStorage.setItem('doneResultLearnCS50', todayDate);

    // Update Done
    setDoneLearnCS50();        
}

// Get values from storage
function setDoneLearnCS50()
{
    // Get values from local storage
    let currentDoneCS50 = localStorage.getItem('doneResultLearnCS50');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#doneResultLearnCS50').innerHTML = currentDoneCS50;
}