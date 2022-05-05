/* let text_1 = document.getElementById('text_1')

let removeButton_1 = document.getElementById('remove_1')
removeButton_1.addEventListener('click', function(){
    if (this.innerHTML === "remove") {
        this.innerHTML = "add";
        
        text_1.style.display = "none"
        
      } else {
        this.innerHTML = "remove";
        text_1.style.display = "inline-block"
       
      }
})



let text_2 = document.getElementById('text_2')

let removeButton_2 = document.getElementById('remove_2')
removeButton_2.addEventListener('click', function(){
    if (this.innerHTML === "remove") {
        this.innerHTML = "add";
        
        text_2.style.display = "none"
        
      } else {
        this.innerHTML = "remove";
        text_2.style.display = "inline-block"
       
      }
})


let text_3 = document.getElementById('text_3')

let removeButton_3 = document.getElementById('remove_3')
removeButton_3.addEventListener('click', function(){
    if (this.innerHTML === "remove") {
        this.innerHTML = "add";
        
        text_3.style.display = "none"
        
      } else {
        this.innerHTML = "remove";
        text_3.style.display = "inline-block"
       
      }
})


let text_4 = document.getElementById('text_4')

let removeButton_4 = document.getElementById('remove_4')
removeButton_4.addEventListener('click', function(){
    if (this.innerHTML === "remove") {
        this.innerHTML = "add";
        
        text_4.style.display = "none"
        
      } else {
        this.innerHTML = "remove";
        text_4.style.display = "inline-block"
       
      }
})
 */


/* 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .accordion-text {
        max-height: 0px;
        transition: all 0.3s ease;
        overflow: hidden;
      }

      .accordion-text.open {
        max-height: 9000px;
      }
    </style>
  </head>
  <body>
    <div class="accordion">
      <h2>Description</h2>
      <div class="accordion-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        dicta quos. Unde aliquam cupiditate dolorum alias dolor recusandae magni
        inventore laudantium ut molestias dicta laboriosam, earum fuga minus
        ipsum reprehenderit?
      </div>
      <h2>Details</h2>
      <div class="accordion-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        dicta quos. Unde aliquam cupiditate dolorum alias dolor recusandae magni
        inventore laudantium ut molestias dicta laboriosam, earum fuga minus
        ipsum reprehenderit?
      </div>
    </div>
    <script>
      const accordionTitle = document.querySelectorAll('.accordion h2');
      accordionTitle.forEach((e) =>
        e.addEventListener('click', toggleAccordion)
      );
      function toggleAccordion(event) {
        event.target.nextElementSibling.classList.toggle('open');
      }
    </script>
  </body>
</html> */

const heartButton = document.querySelectorAll('.products .product .product_data span');
      heartButton.forEach((e) =>
        e.addEventListener('click', toggleFavorite)
      );
      function toggleFavorite(event) {
          event.target.classList.toggle('heart')
         
      }


const gridView = document.getElementById('grid_view');
const gridOn = document.getElementById('grid_on');
const gridElement = document.querySelector('.products_grid')
const productInfo = document.querySelectorAll('.product .product_info')

gridView.addEventListener('click', showInfo_changeGrid);
gridOn.addEventListener('click', hideInfo_changeGrid);

function showInfo_changeGrid(){
    productInfo.forEach((e) =>
    e.style.display= 'inherit');
    gridOn.style.opacity = '0.5'
    gridView.style.opacity = '1'
    gridElement.classList.remove('grid_long')
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