




const productsGrid = document.getElementById('products_grid')


const products = [
    {
        name: 'prodotto_1',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_2',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_3',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_4',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_5',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_6',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_7',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_8',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_9',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_10',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_11',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_12',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_13',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_14',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_15',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    {
        name: 'prodotto_16',
        desc: 'desc',
        discount_price: '120,00',
        price: '240,00',
        favorite: false
    },
    
]
const favoriteProducts=[]

products.forEach((product,index)=>{
    const productHtml = `<div class="product" id="product_${index}">
                            <div class="product_data">
                                <a href="./product.html">
                                    <img src="https://source.unsplash.com/random/900/?fruit" alt="frutta">
                                </a>
                                
                                <button class="material-symbols-outlined">
                                favorite
                                </button>
                                <div class="new_tag">NEW</div>
                                <div class="quantity">X6</div>
                            </div>
                            <div class="product_info">
                                <div class="name_desc">
                                    <h3>${product.name}</h3>
                                    <p>${product.desc}</p>
                                </div>
                                <div class="price">
                                    <div>
                                    <p class="discount_price">$${product.discount_price}</p>
                                    <p class="old_price">$${product.price}</p>
                                    </div>
                                    <button class="material-symbols-outlined">
                                    local_mall
                                    </button>

                                </div>
                            </div>
                        </div>`



productsGrid.innerHTML += productHtml


const cart = document.querySelector('#cart::after')
console.log(cart)
let counter = 0
const heartButton = document.querySelectorAll('.products .product .product_data button');
      heartButton.forEach((e) =>
        e.addEventListener('click', toggleFavorite)
      );
      function toggleFavorite(event) {
          event.target.classList.toggle('heart')
          product.favorite = !product.favorite
          console.log(product.favorite)
          if(event.target.classList.contains('heart')){
              counter =- 1
              
              cart.innerHTML= counter
          }else if(!event.target.classList.contains('heart')){
              counter =+ 1
              
              cart.innerHTML= counter
          };
          
          
          
         
      };


})









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

