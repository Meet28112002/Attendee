console.log('we are at project in taking notes')
shownotes();
//if user enter the notes. store it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let cars = document.getElementById('cars');
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        Title : addTitle.value,
        Text : addTxt.value,
        Cars : cars.value
    }
    notesObj.push(myobj);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = '';
    addTitle.value = '';
    cars.value = '';
    //console.log(notesObj)
    shownotes();
});

//function to print the Notes
function shownotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html +=  `
        <div class=" noteCard1 my-2 mx-2 card" style="width: 18rem;">
        <div class=" card-body">
            <p class="card-title">Starting from : <b>${element.Title}</b></p>
            <p class="card-text">To Ending date : <b>${element.Text}</b></p>
            <p class="card-text">Leave Type : <b>${element.Cars}</p>
            <button id= '${index}' onclick = "deleteNote(this.id)" class="approve">Approve</button>
            <button id= '${index}' onclick = "deleteNote(this.id)" class="decline">Decline</button>
        </div>
    </div> `;
    })
    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<div style="color:white;" class = "not">Not Finding any Notes! Add Notes</div>`
    }
}

//fuction to delete notes
function deleteNote(index) {
    //console.log('deleted note', index)
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    shownotes();
    let notifi = document.getElementById('notifi');
    notifi.innerHTML = `<p><i class="fa fa-check-circle" style="font-size:25px;color:green"></i>Your Leave Request is apporoved.</p>`

}

// to search note
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        if(cardTitle.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
