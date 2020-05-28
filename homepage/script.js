
// ABOUT ALERT
document.querySelector("#about").onclick = function () {
    alert("About Text");
}




// TODAY DATE
let today = new Date();
let todayDate = today.toDateString();
document.querySelector("#today").innerHTML = todayDate;





// STATUS FORM

let editFormStatus = document.querySelector('#editFormStatus');
let editButtonStatus = document.querySelector('#editButtonStatus');

// Open Status Form on Edit button
editButtonStatus.onclick = function() 
{
    editFormStatus.classList.remove('hide');
    editButtonStatus.classList.add('hide');
}

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('resultStatus'))
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
    if (document.querySelector('#newStatus').value == "")
    {
        // Then hide Form
        editFormStatus.classList.add('hide');
        editButtonStatus.classList.remove('hide');
    }
    else
    {
        // If Status value is not empty - set key/value
        localStorage.setItem('resultStatus', document.querySelector('#newStatus').value);
        
        // Update status
        setStatus();
    
        // Hide Edit form, show Edit button
        editFormStatus.classList.add('hide');
        editButtonStatus.classList.remove('hide');

    }
}

// Get values from storage
function setStatus()
{
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    let currentStatus = localStorage.getItem('resultStatus');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#resultStatus').innerHTML = currentStatus;
}

// Handler to take data when pressed
document.querySelector('#submitStatus').onclick = populateStatus;





// CURRENT GOAL FORM

let editFormGoal = document.querySelector('#editFormGoal');
let editButtonGoal = document.querySelector('#editButtonGoal');

// Open Goal Form on Edit button
editButtonGoal.onclick = function () {
    editFormGoal.classList.remove('hide');
    editButtonGoal.classList.add('hide');
}

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('resultGoal')) {
    // Add the existing values to the storage
    populateGoal();
}
else {
    // Update the page with the stored values
    setGoal();
}

// Setting values in storage
function populateGoal() {
    // Check if Goal value is empty
    if (document.querySelector('#newGoal').value == "") {
        // Then hide Form
        editFormGoal.classList.add('hide');
        editButtonGoal.classList.remove('hide');
    }
    else {
        // If Goal value is not empty - set key/value
        localStorage.setItem('resultGoal', document.querySelector('#newGoal').value);

        // Update goal
        setGoal();

        // Hide Edit form, show Edit button
        editFormGoal.classList.add('hide');
        editButtonGoal.classList.remove('hide');

    }
}

// Get values from storage
function setGoal() {
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    let currentGoal = localStorage.getItem('resultGoal');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#resultGoal').innerHTML = currentGoal;
}

// Handler to take data when pressed
document.querySelector('#submitGoal').onclick = populateGoal;





// RECENT


// RECENT BOOK TITLE

let editFormRecentBook = document.querySelector('#editFormRecentBook');
let editButtonRecentBook = document.querySelector('#editButtonRecentBook');

// Open RecentBook Form on Edit button
editButtonRecentBook.onclick = function () {
    editFormRecentBook.classList.remove('hide');
    editButtonRecentBook.classList.add('hide');
}

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('resultRecentBook')) {
    // Add the existing values to the storage
    populateRecentBook();
}
else {
    // Update the page with the stored values
    setRecentBook();
}

// Setting values in storage
function populateRecentBook() {
    // Check if RecentBook value is empty
    if (document.querySelector('#newRecentBook').value == "") {
        // Then hide Form
        editFormRecentBook.classList.add('hide');
        editButtonRecentBook.classList.remove('hide');
    }
    else {
        // If RecentBook value is not empty - set key/value
        localStorage.setItem('resultRecentBook', document.querySelector('#newRecentBook').value);

        // Update recentBook
        setRecentBook();

        // Hide Edit form, show Edit button
        editFormRecentBook.classList.add('hide');
        editButtonRecentBook.classList.remove('hide');

    }
}

// Get values from storage
function setRecentBook() {
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    let currentRecentBook = localStorage.getItem('resultRecentBook');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#resultRecentBook').innerHTML = currentRecentBook;
}

// Handler to take data when pressed
document.querySelector('#submitRecentBook').onclick = populateRecentBook;



// RECENT MOVIE TITLE

let editFormRecentMovie = document.querySelector('#editFormRecentMovie');
let editButtonRecentMovie = document.querySelector('#editButtonRecentMovie');

// Open RecentMovie Form on Edit button
editButtonRecentMovie.onclick = function () {
    editFormRecentMovie.classList.remove('hide');
    editButtonRecentMovie.classList.add('hide');
}

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('resultRecentMovie')) {
    // Add the existing values to the storage
    populateRecentMovie();
}
else {
    // Update the page with the stored values
    setRecentMovie();
}

// Setting values in storage
function populateRecentMovie() {
    // Check if RecentMovie value is empty
    if (document.querySelector('#newRecentMovie').value == "") {
        // Then hide Form
        editFormRecentMovie.classList.add('hide');
        editButtonRecentMovie.classList.remove('hide');
    }
    else {
        // If RecentMovie value is not empty - set key/value
        localStorage.setItem('resultRecentMovie', document.querySelector('#newRecentMovie').value);

        // Update recentMovie
        setRecentMovie();

        // Hide Edit form, show Edit button
        editFormRecentMovie.classList.add('hide');
        editButtonRecentMovie.classList.remove('hide');

    }
}

// Get values from storage
function setRecentMovie() {
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    let currentRecentMovie = localStorage.getItem('resultRecentMovie');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#resultRecentMovie').innerHTML = currentRecentMovie;
}

// Handler to take data when pressed
document.querySelector('#submitRecentMovie').onclick = populateRecentMovie;





// DONE BUTTONS


// BUTTON LEARN - CS50

// Get values from local storage if it's exist
let currentDoneLearnCS50 = localStorage.getItem('doneResultLearnCS50');

// Check whether the storage object has already been populted
if (!localStorage.getItem('doneResultLearnCS50')) 
{
    // If not - populate with new values when click done button
    document.querySelector('#doneButtonLearnCS50').onclick = populateStorageLearnCS50;
}
// If storage already been populated
else 
{
    // Set done date
    setStorageLearnCS50();
}

// Populate Storage
function populateStorageLearnCS50() {
    // Set key/value
    localStorage.setItem('doneResultLearnCS50', todayDate);
    // Update  done date
    setStorageLearnCS50();
}

// Set values
function setStorageLearnCS50() {
    // Get values from local storage
    currentDoneLearnCS50 = localStorage.getItem('doneResultLearnCS50');
    // Set values to display to keep in sync when reload the page
    document.querySelector('#doneResultLearnCS50').innerHTML = currentDoneLearnCS50;
    // Check whether done clicked in a new day
    if (!(currentDoneLearnCS50 == todayDate))
    {
        document.querySelector('#doneButtonLearnCS50').onclick = populateStorageLearnCS50;
    }   
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





// CURRENT PROJECT

// CURRENT PROJECT - FROM EDIT

let editFormCurrentProject = document.querySelector('#editFormCurrentProject');
let editButtonCurrentProject = document.querySelector('#editButtonCurrentProject');

// Open CurrentProject Form on Edit button
editButtonCurrentProject.onclick = function () {
    editFormCurrentProject.classList.remove('hide');
    editButtonCurrentProject.classList.add('hide');
}

// Check whether the storage object has already been populted
// The Storage.getItem() method is used to get a data item from storage
if (!localStorage.getItem('resultCurrentProject')) {
    // Add the existing values to the storage
    populateCurrentProject();
}
else {
    // Update the page with the stored values
    setCurrentProject();
}

// Setting values in storage
function populateCurrentProject() {
    // Check if CurrentProject value is empty
    if (document.querySelector('#newCurrentProject').value == "") {
        // Then hide Form
        editFormCurrentProject.classList.add('hide');
        editButtonCurrentProject.classList.remove('hide');
    }
    else {
        // If CurrentProject value is not empty - set key/value
        localStorage.setItem('resultCurrentProject', document.querySelector('#newCurrentProject').value);

        // Update CurrentProject
        setCurrentProject();

        // Hide Edit form, show Edit button
        editFormCurrentProject.classList.add('hide');
        editButtonCurrentProject.classList.remove('hide');

    }
}

// Get values from storage
function setCurrentProject() {
    // Get values from local storage
    // Method takes the key as a argument, and returns the data value
    let currentCurrentProject = localStorage.getItem('resultCurrentProject');

    // Set values to display to keep in sync when reload the page
    document.querySelector('#resultCurrentProject').innerHTML = currentCurrentProject;
}

// Handler to take data when pressed
document.querySelector('#submitCurrentProject').onclick = populateCurrentProject;

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