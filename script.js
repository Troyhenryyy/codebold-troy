
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


const toggleBtn = document.querySelector('.dropdown_btn')
const toggleBtn1 = document.querySelector('.exit')
const toggleBtnIcon = document.querySelector('.dropdown_btn i')
const toggleBtnIcon1 = document.querySelector('.exit i')
const dropDownMenu = document.querySelector('.dropdown_menu')

function toggleMenu() {
    dropDownMenu.classList.toggle('open');
  }

  toggleBtn.onclick = toggleMenu;
  toggleBtn1.onclick = toggleMenu;



  