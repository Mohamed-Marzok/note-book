let add = document.querySelector(".add");
let addIcon = document.querySelector(".add i");
let notes = document.querySelector(".notes");
let note = document.querySelector(".note");
let addText = document.querySelector(".add-text");
let allnote;
add.addEventListener("click", function () {
  addText.style.display = "block";
  addIcon.style.display = "none";
  addText.focus();
});
addText.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    let text = addText.value;
    let newnote = document.createElement("div");
    newnote.className = "note";
    newnote.textContent = text;
    newnote.style.background = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    },${Math.random() * 255})`;
    notes.appendChild(newnote);
    addText.style.display = "none";
    addIcon.style.display = "block";
    addText.value = "";
    allnote = document.querySelectorAll(".note");
    [...allnote].forEach(function (note) {
      note.addEventListener("dblclick", function () {
        note.remove();
      });
    });
  }
});
