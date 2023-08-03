// Sidebar Code
for(var i=0;i<2;i++){
    document.querySelectorAll(".menu-icon")[i].addEventListener("click",function(){
        document.querySelector(".mini-sidebar").classList.toggle("close");
        document.querySelector(".sidebar-container").classList.toggle("open");
        document.querySelector(".two-rows").classList.toggle("ml-76");
        document.querySelector(".f-header").classList.toggle("leftP");
        document.querySelector(".cover").classList.toggle("width-330");
    });
}

// Code for overlay effect

document.querySelector(".overlay").addEventListener("click",function(){
    document.querySelector(".sidebar-container").classList.remove("open");
});