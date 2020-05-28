
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

let currentDoneLearnEng = localStorage.getItem('doneResultLearnEng');
if (!localStorage.getItem('doneResultLearnEng')) {
    document.querySelector('#doneButtonLearnEng').onclick = populateStorageLearnEng;
}
else {
    setStorageLearnEng();
}
function populateStorageLearnEng() {
    localStorage.setItem('doneResultLearnEng', todayDate);
    setStorageLearnEng();
}
function setStorageLearnEng() {
    currentDoneLearnEng = localStorage.getItem('doneResultLearnEng');
    document.querySelector('#doneResultLearnEng').innerHTML = currentDoneLearnEng;
    if (!(currentDoneLearnEng == todayDate)) {
        document.querySelector('#doneButtonLearnEng').onclick = populateStorageLearnEng;
    }
}



// BUTTON CONNECT - CHAT

let currentDoneConnectChat = localStorage.getItem('doneResultConnectChat');
if (!localStorage.getItem('doneResultConnectChat')) {
    document.querySelector('#doneButtonConnectChat').onclick = populateStorageConnectChat;
}
else {
    setStorageConnectChat();
}
function populateStorageConnectChat() {
    localStorage.setItem('doneResultConnectChat', todayDate);
    setStorageConnectChat();
}
function setStorageConnectChat() {
    currentDoneConnectChat = localStorage.getItem('doneResultConnectChat');
    document.querySelector('#doneResultConnectChat').innerHTML = currentDoneConnectChat;
    if (!(currentDoneConnectChat == todayDate)) {
        document.querySelector('#doneButtonConnectChat').onclick = populateStorageConnectChat;
    }
}



// BUTTON CONNECT - MEZHAKA

let currentDoneConnectMezhaka = localStorage.getItem('doneResultConnectMezhaka');
if (!localStorage.getItem('doneResultConnectMezhaka')) {
    document.querySelector('#doneButtonConnectMezhaka').onclick = populateStorageConnectMezhaka;
}
else {
    setStorageConnectMezhaka();
}
function populateStorageConnectMezhaka() {
    localStorage.setItem('doneResultConnectMezhaka', todayDate);
    setStorageConnectMezhaka();
}
function setStorageConnectMezhaka() {
    currentDoneConnectMezhaka = localStorage.getItem('doneResultConnectMezhaka');
    document.querySelector('#doneResultConnectMezhaka').innerHTML = currentDoneConnectMezhaka;
    if (!(currentDoneConnectMezhaka == todayDate)) {
        document.querySelector('#doneButtonConnectMezhaka').onclick = populateStorageConnectMezhaka;
    }
}



// BUTTON CONNECT - SASHA D

let currentDoneConnectSashaD = localStorage.getItem('doneResultConnectSashaD');
if (!localStorage.getItem('doneResultConnectSashaD')) {
    document.querySelector('#doneButtonConnectSashaD').onclick = populateStorageConnectSashaD;
}
else {
    setStorageConnectSashaD();
}
function populateStorageConnectSashaD() {
    localStorage.setItem('doneResultConnectSashaD', todayDate);
    setStorageConnectSashaD();
}
function setStorageConnectSashaD() {
    currentDoneConnectSashaD = localStorage.getItem('doneResultConnectSashaD');
    document.querySelector('#doneResultConnectSashaD').innerHTML = currentDoneConnectSashaD;
    if (!(currentDoneConnectSashaD == todayDate)) {
        document.querySelector('#doneButtonConnectSashaD').onclick = populateStorageConnectSashaD;
    }
}



// BUTTON CONNECT - RANDOM

let currentDoneConnectRandom = localStorage.getItem('doneResultConnectRandom');
if (!localStorage.getItem('doneResultConnectRandom')) {
    document.querySelector('#doneButtonConnectRandom').onclick = populateStorageConnectRandom;
}
else {
    setStorageConnectRandom();
}
function populateStorageConnectRandom() {
    localStorage.setItem('doneResultConnectRandom', todayDate);
    setStorageConnectRandom();
}
function setStorageConnectRandom() {
    currentDoneConnectRandom = localStorage.getItem('doneResultConnectRandom');
    document.querySelector('#doneResultConnectRandom').innerHTML = currentDoneConnectRandom;
    if (!(currentDoneConnectRandom == todayDate)) {
        document.querySelector('#doneButtonConnectRandom').onclick = populateStorageConnectRandom;
    }
}



// BUTTON SPORT - EXERCISES

let currentDoneSportExercises = localStorage.getItem('doneResultSportExercises');
if (!localStorage.getItem('doneResultSportExercises')) {
    document.querySelector('#doneButtonSportExercises').onclick = populateStorageSportExercises;
}
else {
    setStorageSportExercises();
}
function populateStorageSportExercises() {
    localStorage.setItem('doneResultSportExercises', todayDate);
    setStorageSportExercises();
}
function setStorageSportExercises() {
    currentDoneSportExercises = localStorage.getItem('doneResultSportExercises');
    document.querySelector('#doneResultSportExercises').innerHTML = currentDoneSportExercises;
    if (!(currentDoneSportExercises == todayDate)) {
        document.querySelector('#doneButtonSportExercises').onclick = populateStorageSportExercises;
    }
}



// BUTTON SPORT - RUNNING

let currentDoneSportRunning = localStorage.getItem('doneResultSportRunning');
if (!localStorage.getItem('doneResultSportRunning')) {
    document.querySelector('#doneButtonSportRunning').onclick = populateStorageSportRunning;
}
else {
    setStorageSportRunning();
}
function populateStorageSportRunning() {
    localStorage.setItem('doneResultSportRunning', todayDate);
    setStorageSportRunning();
}
function setStorageSportRunning() {
    currentDoneSportRunning = localStorage.getItem('doneResultSportRunning');
    document.querySelector('#doneResultSportRunning').innerHTML = currentDoneSportRunning;
    if (!(currentDoneSportRunning == todayDate)) {
        document.querySelector('#doneButtonSportRunning').onclick = populateStorageSportRunning;
    }
}



// BUTTON SPORT - BIKE

let currentDoneSportBike = localStorage.getItem('doneResultSportBike');
if (!localStorage.getItem('doneResultSportBike')) {
    document.querySelector('#doneButtonSportBike').onclick = populateStorageSportBike;
}
else {
    setStorageSportBike();
}
function populateStorageSportBike() {
    localStorage.setItem('doneResultSportBike', todayDate);
    setStorageSportBike();
}
function setStorageSportBike() {
    currentDoneSportBike = localStorage.getItem('doneResultSportBike');
    document.querySelector('#doneResultSportBike').innerHTML = currentDoneSportBike;
    if (!(currentDoneSportBike == todayDate)) {
        document.querySelector('#doneButtonSportBike').onclick = populateStorageSportBike;
    }
}



// BUTTON SPORT - STRENGTH

let currentDoneSportStrength = localStorage.getItem('doneResultSportStrength');
if (!localStorage.getItem('doneResultSportStrength')) {
    document.querySelector('#doneButtonSportStrength').onclick = populateStorageSportStrength;
}
else {
    setStorageSportStrength();
}
function populateStorageSportStrength() {
    localStorage.setItem('doneResultSportStrength', todayDate);
    setStorageSportStrength();
}
function setStorageSportStrength() {
    currentDoneSportStrength = localStorage.getItem('doneResultSportStrength');
    document.querySelector('#doneResultSportStrength').innerHTML = currentDoneSportStrength;
    if (!(currentDoneSportStrength == todayDate)) {
        document.querySelector('#doneButtonSportStrength').onclick = populateStorageSportStrength;
    }
}



// BUTTON DRAW - DPRN DIARY

let currentDoneDrawDprnDiary = localStorage.getItem('doneResultDrawDprnDiary');
if (!localStorage.getItem('doneResultDrawDprnDiary')) {
    document.querySelector('#doneButtonDrawDprnDiary').onclick = populateStorageDrawDprnDiary;
}
else {
    setStorageDrawDprnDiary();
}
function populateStorageDrawDprnDiary() {
    localStorage.setItem('doneResultDrawDprnDiary', todayDate);
    setStorageDrawDprnDiary();
}
function setStorageDrawDprnDiary() {
    currentDoneDrawDprnDiary = localStorage.getItem('doneResultDrawDprnDiary');
    document.querySelector('#doneResultDrawDprnDiary').innerHTML = currentDoneDrawDprnDiary;
    if (!(currentDoneDrawDprnDiary == todayDate)) {
        document.querySelector('#doneButtonDrawDprnDiary').onclick = populateStorageDrawDprnDiary;
    }
}



// BUTTON DRAW - LINE DRAWING

let currentDoneDrawLineDrawing = localStorage.getItem('doneResultDrawLineDrawing');
if (!localStorage.getItem('doneResultDrawLineDrawing')) {
    document.querySelector('#doneButtonDrawLineDrawing').onclick = populateStorageDrawLineDrawing;
}
else {
    setStorageDrawLineDrawing();
}
function populateStorageDrawLineDrawing() {
    localStorage.setItem('doneResultDrawLineDrawing', todayDate);
    setStorageDrawLineDrawing();
}
function setStorageDrawLineDrawing() {
    currentDoneDrawLineDrawing = localStorage.getItem('doneResultDrawLineDrawing');
    document.querySelector('#doneResultDrawLineDrawing').innerHTML = currentDoneDrawLineDrawing;
    if (!(currentDoneDrawLineDrawing == todayDate)) {
        document.querySelector('#doneButtonDrawLineDrawing').onclick = populateStorageDrawLineDrawing;
    }
}



// BUTTON DRAW - COLOR PENCIL

let currentDoneDrawColorPencil = localStorage.getItem('doneResultDrawColorPencil');
if (!localStorage.getItem('doneResultDrawColorPencil')) {
    document.querySelector('#doneButtonDrawColorPencil').onclick = populateStorageDrawColorPencil;
}
else {
    setStorageDrawColorPencil();
}
function populateStorageDrawColorPencil() {
    localStorage.setItem('doneResultDrawColorPencil', todayDate);
    setStorageDrawColorPencil();
}
function setStorageDrawColorPencil() {
    currentDoneDrawColorPencil = localStorage.getItem('doneResultDrawColorPencil');
    document.querySelector('#doneResultDrawColorPencil').innerHTML = currentDoneDrawColorPencil;
    if (!(currentDoneDrawColorPencil == todayDate)) {
        document.querySelector('#doneButtonDrawColorPencil').onclick = populateStorageDrawColorPencil;
    }
}



// BUTTON DRAW - MISC

let currentDoneDrawMisc = localStorage.getItem('doneResultDrawMisc');
if (!localStorage.getItem('doneResultDrawMisc')) {
    document.querySelector('#doneButtonDrawMisc').onclick = populateStorageDrawMisc;
}
else {
    setStorageDrawMisc();
}
function populateStorageDrawMisc() {
    localStorage.setItem('doneResultDrawMisc', todayDate);
    setStorageDrawMisc();
}
function setStorageDrawMisc() {
    currentDoneDrawMisc = localStorage.getItem('doneResultDrawMisc');
    document.querySelector('#doneResultDrawMisc').innerHTML = currentDoneDrawMisc;
    if (!(currentDoneDrawMisc == todayDate)) {
        document.querySelector('#doneButtonDrawMisc').onclick = populateStorageDrawMisc;
    }
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

let currentDoneCurrentProject = localStorage.getItem('doneResultCurrentProject');
if (!localStorage.getItem('doneResultCurrentProject')) {
    document.querySelector('#doneButtonCurrentProject').onclick = populateStorageCurrentProject;
}
else {
    setStorageCurrentProject();
}
function populateStorageCurrentProject() {
    localStorage.setItem('doneResultCurrentProject', todayDate);
    setStorageCurrentProject();
}
function setStorageCurrentProject() {
    currentDoneCurrentProject = localStorage.getItem('doneResultCurrentProject');
    document.querySelector('#doneResultCurrentProject').innerHTML = currentDoneCurrentProject;
    if (!(currentDoneCurrentProject == todayDate)) {
        document.querySelector('#doneButtonCurrentProject').onclick = populateStorageCurrentProject;
    }
}