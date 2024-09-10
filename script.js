const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    var fixed = document.querySelector("#fixed-image");

    var container = document.querySelector("#elem-container");
    container.addEventListener("mouseenter",function(){
        // console.log("abc");
        fixed.style.display= "block";
    })
    container.addEventListener("mouseleave",function(){
        // console.log("abc");
        fixed.style.display= "none";
    })

    var elems = document.querySelectorAll(".elem");
    console.log(elems)
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter",()=>{
            var a = elem.getAttribute("data-image");
            fixed.style.backgroundImage =  `url(${a})`;
        })
    })
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
}


function cursor(){
    var page5 = document.querySelector("#page5");
    var cursor = document.querySelector("#cursor");
    page5.addEventListener("mousemove",function(e){
        cursor.style.left = e.x+"px";
        cursor.style.top = e.y+"px";
    })
}


function loaderAnimation(){
    var loader = document.querySelector("#loader");
    setTimeout(function(){
        loader.style.top = "-100%";
        // loader.style.display = "none";
    },4000)
}
loaderAnimation();
cursor();
page4Animation();
swiperAnimation();

