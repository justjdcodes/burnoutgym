window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("intro").style.display="none";

        document.getElementById("main-site").style.display="block";

    },8000);

});
const sideMenu = document.getElementById("sideMenu");

const openMenu = document.getElementById("openMenu");

const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {

    sideMenu.style.right = "0";

});

closeMenu.addEventListener("click", () => {

    sideMenu.style.right = "-320px";

});
