
function ProductDown() {

    const itemProducts = document.querySelectorAll(".title-article");
    console.log('productazos: ',itemProducts)     
    let items=[]

    for (let i = 0; i < itemProducts.length; i++) {  
        items.push(itemProducts[i].dataset.item)
    }

    console.log('data items: ',items)

    for (let i = 0; i < itemProducts.length; i++) {  
       let itemsclose=items.filter((value,index,array)=> {return value != i})   
       console.log("el valor de i es:", i)
       console.log("item no dentro de i",itemsclose)  

        itemProducts[i].addEventListener("click", function() {
           document.querySelectorAll(".product-article")[i].style.height='300px'
           for (let index = 0; index < itemsclose.length; index++) {
               let value=itemsclose[index]
            document.querySelectorAll(".product-article")[value].style.height='80px'              
           }

        });


        



    }    
}





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

        const itemProducts = document.querySelectorAll(".title-article");   
        for (let i = 0; i < itemProducts.length; i++) {  
            document.querySelectorAll(".product-article")[i].style.height='300px'
            };       



         
    } else {

        ProductDown();
/*         const itemProducts = document.querySelectorAll(".title-article");   
        for (let i = 0; i < itemProducts.length; i++) {  
            document.querySelectorAll(".product-article")[i].style.height='300px'
            }; */


        document.querySelectorAll(".menu-items")[0].style.display='none'
        document.querySelectorAll(".menu-icon")[0].style.display='block'        

        document.querySelectorAll(".menu-icon")[0].addEventListener("click", function(){
        
            document.querySelectorAll(".menu-items")[0].style.display='block'
            document.querySelectorAll(".menu-icon")[0].style.display='none'
        
          
        })
        
        
        document.querySelectorAll(".exit-menu-icon")[0].addEventListener("click", function(){        
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