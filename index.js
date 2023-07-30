// Sidebar Code
for(var i=0;i<2;i++){
    document.querySelectorAll(".menu-icon")[i].addEventListener("click",function(){
        document.querySelector(".mini-sidebar").classList.toggle("close");
        document.querySelector(".sidebar-container").classList.toggle("open");
    });
}