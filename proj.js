

var btn = document.getElementById("btn");
var navBarCollapse = document.getElementById("navbar-collapse");
btn.addEventListener("click", function () {
    navBarCollapse.classList.toggle("show");
})

var navBar = document.getElementById("navbar");
document.addEventListener("scroll", function () {
        if (window.scrollY !== 0) {
        navBar.classList.add("scroll");
        navBar.classList.remove("scrollend");
        }
         else{
            navBar.classList.remove("scroll");
            navBar.classList.add("scrollend");
        }
} );


$($(".btns")[0]).on('click',function(){
    $(".myproj-pics")[0].classList.remove("hidden")
    $(".myproj-text")[0].classList.remove("visiblee")
})
$($(".btns")[1]).on('click',function(){
    $(".myproj-pics")[0].classList.add("hidden")
    $(".myproj-text")[0].classList.add("visiblee")
})
$($(".btns")[2]).on('click',function(){
    $(".myproj-pics")[0].classList.add("hidden")
    $(".myproj-text")[0].classList.add("visiblee")
})

// var pics=document.getElementsByClassName("a-pics")[0];
// console.log(pics);
// console.log($(".a-pics"));

// pics.addEventListener('mouseenter',function(){
//     console.log("dasd");
// })
// $(".a-pics").on('hover',function(e){
//     // $(".myproj-pics")[0].classList.add("hidden")
//     // console.log("dsd");
//     $(".proj-text")[0].classList.add("visiblee")
// })
// $("body").on('mous',function(e){
//     // $(".myproj-pics")[0].classList.add("hidden")
//     // $(".proj-text")[0].classList.remove("visiblee")
// })

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()
// var pics=document.getElementsByClassName("myproj-link")[0];
// console.log(pics);

// pics.addEventListener('mouseup',function(e){
//     // pics.classList.add("proj-imgbx-before")
//     console.log("fsf");
//     e.stopPropagation();
//     e.preventDefault();
// })

// console.log($(".myproj-link"));
// $(".myproj-link img").on('MouseEnter',function(e){
//     console.log($(".myproj-link"));
//     $(".myproj-link").attr('class','proj-imgbx-after')
//     e.preventDefault()
//     // $(".myproj-text").css('display','block')
// })


     
    
   




// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//     navBar.classList.add("scroll");
// }
// function doSomethinggg(scrollPos) {
//     navBar.classList.add("scrollend");
// }

// document.addEventListener("scroll", () => {
//     lastKnownScrollPosition = window.scrollY;
//     if (!ticking) {
//         window.requestAnimationFrame(() => {
//             doSomething(lastKnownScrollPosition);
//             ticking = false;
//         });
//     }
//     else{
//         window.requestAnimationFrame(() => {
//             doSomethinggg(lastKnownScrollPosition);
//         });
//     }
//     ticking = true;
 
// });



