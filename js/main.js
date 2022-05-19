




const productsGrid = document.getElementById('products_grid')


const favoriteProducts=[]



const favoriteButtons = document.querySelectorAll('.products .product .product_data button');
      favoriteButtons.forEach((e) =>
        e.addEventListener('click', toggleFavorite)
      );



      function toggleFavorite(event) {


          const product_id = event.target.dataset.id
          favoriteProducts.push(product_id)
          localStorage.setItem("wishlist", JSON.stringify(favoriteProducts))


          event.target.classList.toggle('heart')
         
        /*   if(event.target.classList.contains('heart')){
              counter =+1
              favoriteProducts.push(event.target.parentElement)
              console.log(event.target.parentElement)
              
              cart.innerHTML= counter
          }else if(!event.target.classList.contains('heart')){
              counter =- 1
              console.log(event.target.parentElement)
              
              
             
          };
           */
          
          
         
      };



    /*   function inizializzaFavoriteProducts(){

        const wishlistlocalstorage = JSON.parse(localStorage.getItem('wishlist'))


        if(wishlistlocalstorage){
            favoriteProducts.push(...wishlistlocalstorage)

        }
        
      

      }
 */




const gridView = document.getElementById('grid_view');
const gridOn = document.getElementById('grid_on');
const gridElement = document.querySelector('.products_grid');
const productInfo = document.querySelectorAll('.product .product_info');
console.log(productInfo)

gridView.addEventListener('click', showInfo_changeGrid);
gridOn.addEventListener('click', hideInfo_changeGrid);

function showInfo_changeGrid(){
    productInfo.forEach((e) =>
    e.style.display= 'inherit');
    gridOn.style.opacity = '0.5';
    gridView.style.opacity = '1';
    gridElement.classList.remove('grid_long');
    document.querySelectorAll('.product_data img').forEach((e)=>{
        e.style.height = '380px'
    e.parentElement.parentElement.style.height = '380px'
    }
    
    )

}


function hideInfo_changeGrid(){
    productInfo.forEach((e) =>
    e.style.display= 'none');
    gridOn.style.opacity = '1'
    gridView.style.opacity = '0.5'
    gridElement.classList.add('grid_long')
    document.querySelectorAll('.product_data img').forEach((e)=>{
        e.style.height = '264px' 
        e.parentElement.parentElement.style.height = '264px'
    }
   

    )

}

