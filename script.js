

document.querySelectorAll(".menu-icon")[0].addEventListener("click", function(){
    console.log('funciona');

    document.querySelectorAll(".menu-items")[0].style.display='block'
  
})


document.querySelectorAll(".exit-menu-icon")[0].addEventListener("click", function(){
    console.log('funciona');

    document.querySelectorAll(".menu-items")[0].style.display='none'
  
})


const item = document.querySelectorAll(".item-link");

 for (let i = 0; i < item.length; i++) {
     item[i].addEventListener("click", function() {
        document.querySelectorAll(".menu-items")[0].style.display='none'
     });
 }



