
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





// DONE BUTTONS


// BUTTON LEARN - CS50

// Check whether the storage object has already been populted
if (!localStorage.getItem('doneResultLearnCS50')) {
    // If not - add the existing values to the storage when click done button
    document.querySelector('#doneButtonLearnCS50').onclick = function() {
        // Set key/value
        localStorage.setItem('doneResultLearnCS50', todayDate);
        // Update  done date
        setStorageLearnCS50();  
    }
}
else {
    // Update the page with the stored values
    setStorageLearnCS50();
}

// Set values
function setStorageLearnCS50() {
    // Get values from local storage
    let currentDoneLearnCS50 = localStorage.getItem('doneResultLearnCS50');
    // Set values to display to keep in sync when reload the page
    document.querySelector('#doneResultLearnCS50').innerHTML = currentDoneLearnCS50;
}



// BUTTON LEARN - ENG

if (!localStorage.getItem('doneResultLearnEng')) {
    document.querySelector('#doneButtonLearnEng').onclick = function () {
        localStorage.setItem('doneResultLearnEng', todayDate);
        setStorageLearnEng();
    }
} else {
    setStorageLearnEng();
}
function setStorageLearnEng() {
    let currentDoneLearnEng = localStorage.getItem('doneResultLearnEng');
    document.querySelector('#doneResultLearnEng').innerHTML = currentDoneLearnEng;
}



// BUTTON CONNECT - CHAT

if (!localStorage.getItem('doneResultConnectChat')) {
    document.querySelector('#doneButtonConnectChat').onclick = function () {
        localStorage.setItem('doneResultConnectChat', todayDate);
        setStorageConnectChat();
    }
} else {
    setStorageConnectChat();
}
function setStorageConnectChat() {
    let currentDoneConnectChat = localStorage.getItem('doneResultConnectChat');
    document.querySelector('#doneResultConnectChat').innerHTML = currentDoneConnectChat;
}



// BUTTON CONNECT - MEZHAKA

if (!localStorage.getItem('doneResultConnectMezhaka')) {
    document.querySelector('#doneButtonConnectMezhaka').onclick = function () {
        localStorage.setItem('doneResultConnectMezhaka', todayDate);
        setStorageConnectMezhaka();
    }
} else {
    setStorageConnectMezhaka();
}
function setStorageConnectMezhaka() {
    let currentDoneConnectMezhaka = localStorage.getItem('doneResultConnectMezhaka');
    document.querySelector('#doneResultConnectMezhaka').innerHTML = currentDoneConnectMezhaka;
}



// BUTTON CONNECT - SASHA D

if (!localStorage.getItem('doneResultConnectSashaD')) {
    document.querySelector('#doneButtonConnectSashaD').onclick = function () {
        localStorage.setItem('doneResultConnectSashaD', todayDate);
        setStorageConnectSashaD();
    }
} else {
    setStorageConnectSashaD();
}
function setStorageConnectSashaD() {
    let currentDoneConnectSashaD = localStorage.getItem('doneResultConnectSashaD');
    document.querySelector('#doneResultConnectSashaD').innerHTML = currentDoneConnectSashaD;
}



// BUTTON CONNECT - RANDOM

if (!localStorage.getItem('doneResultConnectRandom')) {
    document.querySelector('#doneButtonConnectRandom').onclick = function () {
        localStorage.setItem('doneResultConnectRandom', todayDate);
        setStorageConnectRandom();
    }
} else {
    setStorageConnectRandom();
}
function setStorageConnectRandom() {
    let currentDoneConnectRandom = localStorage.getItem('doneResultConnectRandom');
    document.querySelector('#doneResultConnectRandom').innerHTML = currentDoneConnectRandom;
}



// BUTTON SPORT - EXERCISES

if (!localStorage.getItem('doneResultSportExercises')) {
    document.querySelector('#doneButtonSportExercises').onclick = function () {
        localStorage.setItem('doneResultSportExercises', todayDate);
        setStorageSportExercises();
    }
} else {
    setStorageSportExercises();
}
function setStorageSportExercises() {
    let currentDoneSportExercises = localStorage.getItem('doneResultSportExercises');
    document.querySelector('#doneResultSportExercises').innerHTML = currentDoneSportExercises;
}



// BUTTON SPORT - RUNNING

if (!localStorage.getItem('doneResultSportRunning')) {
    document.querySelector('#doneButtonSportRunning').onclick = function () {
        localStorage.setItem('doneResultSportRunning', todayDate);
        setStorageSportRunning();
    }
} else {
    setStorageSportRunning();
}
function setStorageSportRunning() {
    let currentDoneSportRunning = localStorage.getItem('doneResultSportRunning');
    document.querySelector('#doneResultSportRunning').innerHTML = currentDoneSportRunning;
}



// BUTTON SPORT - BIKE

if (!localStorage.getItem('doneResultSportBike')) {
    document.querySelector('#doneButtonSportBike').onclick = function () {
        localStorage.setItem('doneResultSportBike', todayDate);
        setStorageSportBike();
    }
} else {
    setStorageSportBike();
}
function setStorageSportBike() {
    let currentDoneSportBike = localStorage.getItem('doneResultSportBike');
    document.querySelector('#doneResultSportBike').innerHTML = currentDoneSportBike;
}



// BUTTON SPORT - STRENGTH

if (!localStorage.getItem('doneResultSportStrength')) {
    document.querySelector('#doneButtonSportStrength').onclick = function () {
        localStorage.setItem('doneResultSportStrength', todayDate);
        setStorageSportStrength();
    }
} else {
    setStorageSportStrength();
}
function setStorageSportStrength() {
    let currentDoneSportStrength = localStorage.getItem('doneResultSportStrength');
    document.querySelector('#doneResultSportStrength').innerHTML = currentDoneSportStrength;
}



// BUTTON DRAW - DPRN DIARY

if (!localStorage.getItem('doneResultDrawDprnDiary')) {
    document.querySelector('#doneButtonDrawDprnDiary').onclick = function () {
        localStorage.setItem('doneResultDrawDprnDiary', todayDate);
        setStorageDrawDprnDiary();
    }
} else {
    setStorageDrawDprnDiary();
}
function setStorageDrawDprnDiary() {
    let currentDoneDrawDprnDiary = localStorage.getItem('doneResultDrawDprnDiary');
    document.querySelector('#doneResultDrawDprnDiary').innerHTML = currentDoneDrawDprnDiary;
}



// BUTTON DRAW - LINE DRAWING

if (!localStorage.getItem('doneResultDrawLineDrawing')) {
    document.querySelector('#doneButtonDrawLineDrawing').onclick = function () {
        localStorage.setItem('doneResultDrawLineDrawing', todayDate);
        setStorageDrawLineDrawing();
    }
} else {
    setStorageDrawLineDrawing();
}
function setStorageDrawLineDrawing() {
    let currentDoneDrawLineDrawing = localStorage.getItem('doneResultDrawLineDrawing');
    document.querySelector('#doneResultDrawLineDrawing').innerHTML = currentDoneDrawLineDrawing;
}



// BUTTON DRAW - COLOR PENCIL

if (!localStorage.getItem('doneResultDrawColorPencil')) {
    document.querySelector('#doneButtonDrawColorPencil').onclick = function () {
        localStorage.setItem('doneResultDrawColorPencil', todayDate);
        setStorageDrawColorPencil();
    }
} else {
    setStorageDrawColorPencil();
}
function setStorageDrawColorPencil() {
    let currentDoneDrawColorPencil = localStorage.getItem('doneResultDrawColorPencil');
    document.querySelector('#doneResultDrawColorPencil').innerHTML = currentDoneDrawColorPencil;
}



// BUTTON DRAW - MISC

if (!localStorage.getItem('doneResultDrawMisc')) {
    document.querySelector('#doneButtonDrawMisc').onclick = function () {
        localStorage.setItem('doneResultDrawMisc', todayDate);
        setStorageDrawMisc();
    }
} else {
    setStorageDrawMisc();
}
function setStorageDrawMisc() {
    let currentDoneDrawMisc = localStorage.getItem('doneResultDrawMisc');
    document.querySelector('#doneResultDrawMisc').innerHTML = currentDoneDrawMisc;
}



// BUTTON - CURRENT PROJECT

if (!localStorage.getItem('doneResultProject')) {
    document.querySelector('#doneButtonProject').onclick = function () {
        localStorage.setItem('doneResultProject', todayDate);
        setStorageProject();
    }
} else {
    setStorageProject();
}
function setStorageProject() {
    let currentDoneProject = localStorage.getItem('doneResultProject');
    document.querySelector('#doneResultProject').innerHTML = currentDoneProject;
}