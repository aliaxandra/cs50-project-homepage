// NAVIGATION

function setNavigation()
{
    // Get current path
    let currentPathname = location.pathname;
    // Get 
    let navLinks = document.querySelectorAll("a");
    // Get current page navigation link disabled
    // https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
    for (let i = 0, len = navLinks.length; i < len; i++)
    {
        if (navLinks[i].getAttribute("href").indexOf(currentPathname) !== -1)
        {
            navLinks[i].classList.add("disabled");
        }
    }
}
setNavigation()





// UP BUTTON

function scrollToTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





// DASHBOARD ONLY

if (location.pathname == "/index.html")
{
    // SET TODAY DATE
    
    let today = new Date();
    let todayDate = today.toDateString();
    document.querySelector("#today").innerHTML = todayDate;
    




    // STATUS FORM

    function editFormStatus()
    {
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
    }
    editFormStatus();



    // CURRENT GOAL FORM

    function editCurrentGoal()
    {
        let editFormGoal = document.querySelector('#editFormGoal');
        let editButtonGoal = document.querySelector('#editButtonGoal');
    
        editButtonGoal.onclick = function () {
            editFormGoal.classList.remove('hide');
            editButtonGoal.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultGoal')) {
            populateGoal();
        }
        else {
            setGoal();
        }
    
        function populateGoal() {
            if (document.querySelector('#newGoal').value == "") {
                editFormGoal.classList.add('hide');
                editButtonGoal.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultGoal', document.querySelector('#newGoal').value);
                setGoal();
                editFormGoal.classList.add('hide');
                editButtonGoal.classList.remove('hide');
            }
        }
    
        function setGoal() {
            let currentGoal = localStorage.getItem('resultGoal');
            document.querySelector('#resultGoal').innerHTML = currentGoal;
        }

        document.querySelector('#submitGoal').onclick = populateGoal;
    }
    editCurrentGoal();





    // RECENT

    // RECENT BOOK TITLE

    function editRecentBook()
    {
        let editFormRecentBook = document.querySelector('#editFormRecentBook');
        let editButtonRecentBook = document.querySelector('#editButtonRecentBook');
    
        editButtonRecentBook.onclick = function () {
            editFormRecentBook.classList.remove('hide');
            editButtonRecentBook.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultRecentBook')) {
            populateRecentBook();
        }
        else {
            setRecentBook();
        }
    
        function populateRecentBook() {
            if (document.querySelector('#newRecentBook').value == "") {
                editFormRecentBook.classList.add('hide');
                editButtonRecentBook.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultRecentBook', document.querySelector('#newRecentBook').value);
                setRecentBook();
                editFormRecentBook.classList.add('hide');
                editButtonRecentBook.classList.remove('hide');
            }
        }
    
        function setRecentBook() {
            let currentRecentBook = localStorage.getItem('resultRecentBook');
            document.querySelector('#resultRecentBook').innerHTML = currentRecentBook;
        }
    
        document.querySelector('#submitRecentBook').onclick = populateRecentBook;
    }
    editRecentBook();



    // RECENT MOVIE TITLE

    function editRecentMovie()
    {
        let editFormRecentMovie = document.querySelector('#editFormRecentMovie');
        let editButtonRecentMovie = document.querySelector('#editButtonRecentMovie');
    
        editButtonRecentMovie.onclick = function () {
            editFormRecentMovie.classList.remove('hide');
            editButtonRecentMovie.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultRecentMovie')) {
            populateRecentMovie();
        }
        else {
            setRecentMovie();
        }
    
        function populateRecentMovie() {
            if (document.querySelector('#newRecentMovie').value == "") {
                editFormRecentMovie.classList.add('hide');
                editButtonRecentMovie.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultRecentMovie', document.querySelector('#newRecentMovie').value);
                setRecentMovie();
                editFormRecentMovie.classList.add('hide');
                editButtonRecentMovie.classList.remove('hide');
            }
        }
    
        // Get values from storage
        function setRecentMovie() {
            let currentRecentMovie = localStorage.getItem('resultRecentMovie');
            document.querySelector('#resultRecentMovie').innerHTML = currentRecentMovie;
        }
    
        document.querySelector('#submitRecentMovie').onclick = populateRecentMovie;
    }
    editRecentMovie();



    // RECENT PHOTO

    function editRecentPhoto()
    {
        let editFormRecentPhoto = document.querySelector('#editFormRecentPhoto');
        let editButtonRecentPhoto = document.querySelector('#editButtonRecentPhoto');
    
        editButtonRecentPhoto.onclick = function () {
            editFormRecentPhoto.classList.remove('hide');
            editButtonRecentPhoto.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultRecentPhoto')) {
            populateRecentPhoto();
        }
        else {
            setRecentPhoto();
        }
    
        function populateRecentPhoto() {
            if (document.querySelector('#newRecentPhoto').value == "") {
                editFormRecentPhoto.classList.add('hide');
                editButtonRecentPhoto.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultRecentPhoto', document.querySelector('#newRecentPhoto').value);
                setRecentPhoto();
                editFormRecentPhoto.classList.add('hide');
                editButtonRecentPhoto.classList.remove('hide');
            }
        }
    
        function setRecentPhoto() {
            let currentRecentPhoto = localStorage.getItem('resultRecentPhoto');
            document.querySelector('#resultRecentPhoto').setAttribute('src', currentRecentPhoto);
        }
    
        document.querySelector('#submitRecentPhoto').onclick = populateRecentPhoto;
    }
    editRecentPhoto();



    // RECENT DRAWING

    function editRecentDrawing()
    {
        let editFormRecentDrawing = document.querySelector('#editFormRecentDrawing');
        let editButtonRecentDrawing = document.querySelector('#editButtonRecentDrawing');
    
        editButtonRecentDrawing.onclick = function () {
            editFormRecentDrawing.classList.remove('hide');
            editButtonRecentDrawing.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultRecentDrawing')) {
            populateRecentDrawing();
        }
        else {
            setRecentDrawing();
        }
    
        function populateRecentDrawing() {
            if (document.querySelector('#newRecentDrawing').value == "") {
                editFormRecentDrawing.classList.add('hide');
                editButtonRecentDrawing.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultRecentDrawing', document.querySelector('#newRecentDrawing').value);
                setRecentDrawing();
                editFormRecentDrawing.classList.add('hide');
                editButtonRecentDrawing.classList.remove('hide');
            }
        }
    
        function setRecentDrawing() {
            let currentRecentDrawing = localStorage.getItem('resultRecentDrawing');
            document.querySelector('#resultRecentDrawing').setAttribute('src', currentRecentDrawing);
        }

        document.querySelector('#submitRecentDrawing').onclick = populateRecentDrawing;
    }
    editRecentDrawing();





    // DONE BUTTONS

    // BUTTON LEARN - CS50

    function checkDoneLearnCS50()
    {
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
    }
    checkDoneLearnCS50();



    // BUTTON LEARN - ENG

    function checkDoneLearnEn()
    {
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
    }
    checkDoneLearnEn();



    // BUTTON CONNECT - CHAT

    function checkDoneConnectChat()
    {
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
    }
    checkDoneConnectChat();



    // BUTTON CONNECT - MEZHAKA

    function checkDoneConnectMezhaka()
    {
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
    }
    checkDoneConnectMezhaka();



    // BUTTON CONNECT - SASHA D

    function checkDoneConnectSashaD()
    {
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
    }
    checkDoneConnectSashaD();



    // BUTTON CONNECT - RANDOM

    function checkDoneConnectRandom()
    {
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
    }
    checkDoneConnectRandom();



    // BUTTON SPORT - EXERCISES

    function checkDoneSportExercises()
    {
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
    }
    checkDoneSportExercises();



    // BUTTON SPORT - RUNNING

    function checkDoneSportRunning()
    {
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
    }
    checkDoneSportRunning();



    // BUTTON SPORT - BIKE

    function checkDoneSportBike()
    {
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
    }
    checkDoneSportBike();



    // BUTTON SPORT - STRENGTH

    function checkDoneSportStrength()
    {
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
    }
    checkDoneSportStrength();





    // EDIT DRAWING - DPRN DIARY

    function editDrawDprnDiary()
    {
        let editFormDrawDprnDiary = document.querySelector('#editFormDrawDprnDiary');
        let editButtonDrawDprnDiary = document.querySelector('#editButtonDrawDprnDiary');
    
        editButtonDrawDprnDiary.onclick = function () {
            editFormDrawDprnDiary.classList.remove('hide');
            editButtonDrawDprnDiary.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultDrawDprnDiary')) {
            populateDrawDprnDiary();
        }
        else {
            setDrawDprnDiary();
        }
    
        function populateDrawDprnDiary() {
            if (document.querySelector('#newDrawDprnDiary').value == "") {
                editFormDrawDprnDiary.classList.add('hide');
                editButtonDrawDprnDiary.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultDrawDprnDiary', document.querySelector('#newDrawDprnDiary').value);
                setDrawDprnDiary();
                editFormDrawDprnDiary.classList.add('hide');
                editButtonDrawDprnDiary.classList.remove('hide');
            }
        }
    
        function setDrawDprnDiary() {
            let currentDrawDprnDiary = localStorage.getItem('resultDrawDprnDiary');
            document.querySelector('#resultDrawDprnDiary').setAttribute('src', currentDrawDprnDiary);
        }
    
        document.querySelector('#submitDrawDprnDiary').onclick = populateDrawDprnDiary;
    }
    editDrawDprnDiary();



    // BUTTON DRAW - DPRN DIARY

    function checkDoneDrawDprnDiary()
    {
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
    }
    checkDoneDrawDprnDiary();



    // EDIT DRAWING - LINE DRAWING

    function editDrawLineDrawing()
    {
        let editFormDrawLineDrawing = document.querySelector('#editFormDrawLineDrawing');
        let editButtonDrawLineDrawing = document.querySelector('#editButtonDrawLineDrawing');
    
        editButtonDrawLineDrawing.onclick = function () {
            editFormDrawLineDrawing.classList.remove('hide');
            editButtonDrawLineDrawing.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultDrawLineDrawing')) {
            populateDrawLineDrawing();
        }
        else {
            setDrawLineDrawing();
        }
    
        function populateDrawLineDrawing() {
            if (document.querySelector('#newDrawLineDrawing').value == "") {
                editFormDrawLineDrawing.classList.add('hide');
                editButtonDrawLineDrawing.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultDrawLineDrawing', document.querySelector('#newDrawLineDrawing').value);
                setDrawLineDrawing();
                editFormDrawLineDrawing.classList.add('hide');
                editButtonDrawLineDrawing.classList.remove('hide');
            }
        }
    
        function setDrawLineDrawing() {
            let currentDrawLineDrawing = localStorage.getItem('resultDrawLineDrawing');
            document.querySelector('#resultDrawLineDrawing').setAttribute('src', currentDrawLineDrawing);
        }
    
        document.querySelector('#submitDrawLineDrawing').onclick = populateDrawLineDrawing;
    }
    editDrawLineDrawing();



    // BUTTON DRAW - LINE DRAWING

    function checkDoneDrawLineDrawing()
    {
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
    }
    checkDoneDrawLineDrawing();



    // EDIT DRAWING - COLOR PENCIL

    function editDrawColorPencil()
    {
        let editFormDrawColorPencil = document.querySelector('#editFormDrawColorPencil');
        let editButtonDrawColorPencil = document.querySelector('#editButtonDrawColorPencil');
    
        editButtonDrawColorPencil.onclick = function () {
            editFormDrawColorPencil.classList.remove('hide');
            editButtonDrawColorPencil.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultDrawColorPencil')) {
            populateDrawColorPencil();
        }
        else {
            setDrawColorPencil();
        }
    
        function populateDrawColorPencil() {
            if (document.querySelector('#newDrawColorPencil').value == "") {
                editFormDrawColorPencil.classList.add('hide');
                editButtonDrawColorPencil.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultDrawColorPencil', document.querySelector('#newDrawColorPencil').value);
                setDrawColorPencil();
                editFormDrawColorPencil.classList.add('hide');
                editButtonDrawColorPencil.classList.remove('hide');
            }
        }
    
        function setDrawColorPencil() {
            let currentDrawColorPencil = localStorage.getItem('resultDrawColorPencil');
            document.querySelector('#resultDrawColorPencil').setAttribute('src', currentDrawColorPencil);
        }
    
        document.querySelector('#submitDrawColorPencil').onclick = populateDrawColorPencil;
    }
    editDrawColorPencil();



    // BUTTON DRAW - COLOR PENCIL

    function checkDoneDrawColorPencil()
    {
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
    }
    checkDoneDrawColorPencil();



    // EDIT DRAWING - MISC

    function editFormDrawMisc()
    {
        let editFormDrawMisc = document.querySelector('#editFormDrawMisc');
        let editButtonDrawMisc = document.querySelector('#editButtonDrawMisc');
    
        editButtonDrawMisc.onclick = function () {
            editFormDrawMisc.classList.remove('hide');
            editButtonDrawMisc.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultDrawMisc')) {
            populateDrawMisc();
        }
        else {
            setDrawMisc();
        }
    
        function populateDrawMisc() {
            if (document.querySelector('#newDrawMisc').value == "") {
                editFormDrawMisc.classList.add('hide');
                editButtonDrawMisc.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultDrawMisc', document.querySelector('#newDrawMisc').value);
                setDrawMisc();
                editFormDrawMisc.classList.add('hide');
                editButtonDrawMisc.classList.remove('hide');
            }
        }
    
        function setDrawMisc() {
            let currentDrawMisc = localStorage.getItem('resultDrawMisc');
            document.querySelector('#resultDrawMisc').setAttribute('src', currentDrawMisc);
        }
    
        document.querySelector('#submitDrawMisc').onclick = populateDrawMisc;
    }
    editFormDrawMisc();



    // BUTTON DRAW - MISC

    function checkDoneDrawMisc()
    {
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
    }
    checkDoneDrawMisc();





    // CURRENT PROJECT

    // CURRENT PROJECT - FROM EDIT

    function editFormCurrentProject()
    {
        let editFormCurrentProject = document.querySelector('#editFormCurrentProject');
        let editButtonCurrentProject = document.querySelector('#editButtonCurrentProject');
    
        editButtonCurrentProject.onclick = function () {
            editFormCurrentProject.classList.remove('hide');
            editButtonCurrentProject.classList.add('hide');
        }
    
        if (!localStorage.getItem('resultCurrentProject')) {
            populateCurrentProject();
        }
        else {
            setCurrentProject();
        }
    
        function populateCurrentProject() {
            if (document.querySelector('#newCurrentProject').value == "") {
                editFormCurrentProject.classList.add('hide');
                editButtonCurrentProject.classList.remove('hide');
            }
            else {
                localStorage.setItem('resultCurrentProject', document.querySelector('#newCurrentProject').value);
                setCurrentProject();
                editFormCurrentProject.classList.add('hide');
                editButtonCurrentProject.classList.remove('hide');
            }
        }
    
        function setCurrentProject() {
            let currentCurrentProject = localStorage.getItem('resultCurrentProject');
            document.querySelector('#resultCurrentProject').innerHTML = currentCurrentProject;
        }
    
        document.querySelector('#submitCurrentProject').onclick = populateCurrentProject;
    }
    editFormCurrentProject();



    // BUTTON - CURRENT PROJECT

    function checkDoneCurrentProject()
    {
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
    }
    checkDoneCurrentProject();
}