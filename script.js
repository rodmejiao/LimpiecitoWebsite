
function myFunction(x) {
    if (x.matches) { // If media query matches


        document.querySelectorAll(".menu-items")[0].style.display='block'
        document.querySelectorAll(".menu-icon")[0].style.display='none'

        const item = document.querySelectorAll(".item-link");
        
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener("click", function() {
               document.querySelectorAll(".menu-items")[0].style.display='block'
               document.querySelectorAll(".menu-icon")[0].style.display='none'
            });
        } 

    
         
    } else {
        document.querySelectorAll(".menu-items")[0].style.display='none'
        document.querySelectorAll(".menu-icon")[0].style.display='block'        

        document.querySelectorAll(".menu-icon")[0].addEventListener("click", function(){
            console.log('funciona');
        
            document.querySelectorAll(".menu-items")[0].style.display='block'
            document.querySelectorAll(".menu-icon")[0].style.display='none'
        
          
        })
        
        
        document.querySelectorAll(".exit-menu-icon")[0].addEventListener("click", function(){
            console.log('funciona');
        
            document.querySelectorAll(".menu-items")[0].style.display='none'
            document.querySelectorAll(".menu-icon")[0].style.display='block'
        
          
        })
        
        
        const item = document.querySelectorAll(".item-link");
        
         for (let i = 0; i < item.length; i++) {
             item[i].addEventListener("click", function() {
                document.querySelectorAll(".menu-items")[0].style.display='none'
                document.querySelectorAll(".menu-icon")[0].style.display='block'
             });
         }  
  
    }
  }
  
  var x = window.matchMedia("(min-width: 1024px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener("change", () => {
   myFunction(x);
});



