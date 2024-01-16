
const addNote = document.getElementById('add-note');
const rightContainerNotes = document.querySelector(".right-container-notes");

// add note
addNote.addEventListener('click',() => {
    let note = document.getElementById("textarea").value;
    if(!note){
        alert("Please enter a note");
        return;
    }
    const checkNode =  document.querySelector(".notesNotAdded");
    if(checkNode){
        checkNode.remove();
    }

    const bgColor = document.querySelector("#bg-color").value;
    const noteDiv = document.createElement("div");
    noteDiv.setAttribute("class", "sticky-note");
    noteDiv.style.backgroundColor = bgColor;
    noteDiv.textContent = note;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.setAttribute("value", "X");
    removeBtn.classList.add("remove-btn");

    
    noteDiv.appendChild(removeBtn);
    rightContainerNotes.appendChild(noteDiv);

     document.getElementById("textarea").value = "";
    
});

// remove notes
rightContainerNotes.addEventListener("click", (e) =>{
    if(e.target.value == "X"){
        e.target.parentNode.remove();
    }
});

