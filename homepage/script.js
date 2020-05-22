
// About alert
document.querySelector("#about").onclick = function () {
    alert("About Text");
}


// Set Today date
let today = new Date();
let todayDate = today.toDateString();
document.querySelector("#today").innerHTML = todayDate;


// Status edit

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('statusResult'))
{
    // Add the existing customization values to the storage
    populateStorage();
}
else
{
    // Update the page with the stored values
    setStatus();
}

// Setting values in storage
function populateStorage()
{
    localStorage.setItem('statusResult', document.querySelector('#statusNew').value);
    
    // Update status
    setStatus();
}

// Get values from storage
function setStatus()
{
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    var currentStatus = localStorage.getItem('statusResult');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#statusResult').innerHTML = currentStatus;
}

// Handler to take data when pressed
document.querySelector('#statusSubmit').onclick = populateStorage;