let bold = document.querySelector("#bold");
let italic = document.querySelector("#italic");
let under = document.querySelector("#under");
let color = document.querySelector("#f_c");
let back_c = document.querySelector("#b_c");
let sel1 = document.querySelector("#sel1");
let sel = document.querySelector("#sel");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let center = document.querySelector("#center");
let justify = document.querySelector("#justify");
let order = document.querySelector("#order");
let un_order = document.querySelector("#un_order");
let sup = document.querySelector("#sup");
let sub = document.querySelector("#sub");
let strike = document.querySelector("#strike");
let link = document.querySelector("#link");
let unlink = document.querySelector("#unlink");
let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
let editor = document.querySelector("#editor");
let pdf = document.querySelector("#pdf");
let home = document.querySelector("#home");
let add = document.querySelector("#add");
let div = document.querySelectorAll("#div");
let insert = document.querySelectorAll("#insert");
let tab_b = document.querySelector(".tab-b");
let tab_c = document.querySelector(".tab-c");
let pic = document.querySelector("#pic");
let img = document.querySelectorAll(".img");
let i_s = document.querySelector("#i_s");
let edit = document.querySelector("#edit");


function new_txt() {
  editor.innerHTML = "";
}
i_s.addEventListener("click", () => {
  editor.innerHTML += `<table class="table table-primary table-hover"><tr><td class="td"></td><td class="td"></td></tr></table>`;
})
home.addEventListener("click", () => {
  div.forEach((key) => {
    key.style.display="flex"
  })
  insert.forEach((key) => {
    key.style.display="none";
  })
})
add.addEventListener("click", () => {
  insert.forEach((key) => {
    key.style.display="flex"
  })
  div.forEach((key) => {
    key.style.display="none";
  })
})
function save() {
  localStorage.setItem("editor", editor.innerHTML);
}
pic.addEventListener("change", () => {
  let b = URL.createObjectURL(pic.files[0]);
  editor.innerHTML += "<img class='img' src='"+b+"'>";
})
pdf.addEventListener("click", () => {
  var name = prompt("File name : ");
  html2pdf().from(editor).save(name);
})
sel.addEventListener("change", () => {
  document.execCommand("fontFamily", false, sel.value);
})
undo.addEventListener("click", () => {
  document.execCommand('undo');
})
redo.addEventListener("click", () => {
  document.execCommand('redo');
})
order.addEventListener("click", () => {
  document.execCommand('InsertOrderedList');
})
un_order.addEventListener("click", () => {
  document.execCommand('InsertUnorderedList');
})

strike.addEventListener("click", () => {
  document.execCommand('strikethrough');
})
link.addEventListener("click", () => {
  document.execCommand('createLink', false, document.getSelection());
})
unlink.addEventListener("click", () => {
  document.execCommand('unlink');
})
sup.addEventListener("click", () => {
  document.execCommand('superscript')
})
sub.addEventListener("click", () => {
  document.execCommand('subscript')
})
left.addEventListener("click", () => {
  document.execCommand('justifyleft');
})
right.addEventListener("click", () => {
  document.execCommand('JustifyRight');
})
center.addEventListener("click", () => {
  document.execCommand('justifycenter');
})
justify.addEventListener("click", () => {
  document.execCommand('justifyFull');
})
bold.addEventListener("click", () => {
  document.execCommand('bold');
})
italic.addEventListener("click", () => {
  document.execCommand('italic');
})
under.addEventListener("click", () => {
  document.execCommand('underline');
})
color.addEventListener("input", () => {
  document.execCommand('forecolor', false, color.value);
})
back_c.addEventListener("input", () => {
  document.execCommand('backcolor', false, back_c.value);
})
sel1.addEventListener("change", () => {
  document.execCommand('fontSize', false, sel1.value);
})
sel.addEventListener("change", () => {
  document.execCommand('fontName', false, sel.value);
})
editor.innerHTML = localStorage.getItem("editor");
