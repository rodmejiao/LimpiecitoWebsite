
function myFunction(x) {
    if (x.matches) { // If media query matches

/* 
        let fbpost = document.getElementsByClassName("fb-post")
        console.log(fbpost)

        for (let index = 0; index < fbpost.length; index++) {
            let element = fbpost[index];
            element.setAttribute('data-width','500')
           
            
        } */


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

/* 
        let fbpost = document.getElementsByClassName("fb-post")
        console.log(fbpost)

        for (let index = 0; index < fbpost.length; index++) {
            let element = fbpost[index];
            element.setAttribute('data-width','300')
           
            
        }

 */
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



