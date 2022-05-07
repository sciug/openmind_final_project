
const heartButton = document.querySelectorAll('.products .product .product_data button');
      heartButton.forEach((e) =>
        e.addEventListener('click', toggleFavorite)
      );
      function toggleFavorite(event) {
          event.target.classList.toggle('heart')
         
      };


const gridView = document.getElementById('grid_view');
const gridOn = document.getElementById('grid_on');
const gridElement = document.querySelector('.products_grid');
const productInfo = document.querySelectorAll('.product .product_info');

gridView.addEventListener('click', showInfo_changeGrid);
gridOn.addEventListener('click', hideInfo_changeGrid);

function showInfo_changeGrid(){
    productInfo.forEach((e) =>
    e.style.display= 'inherit');
    gridOn.style.opacity = '0.5';
    gridView.style.opacity = '1';
    gridElement.classList.remove('grid_long');
    document.querySelectorAll('.product_data img').forEach((e)=>
    e.style.height = '380px'
    )

}


function hideInfo_changeGrid(){
    productInfo.forEach((e) =>
    e.style.display= 'none');
    gridOn.style.opacity = '1'
    gridView.style.opacity = '0.5'
    gridElement.classList.add('grid_long')
    document.querySelectorAll('.product_data img').forEach((e)=>
    e.style.height = '264px'
    

    )

}



/* fade animations */

 