
const show_remove_button = document.querySelectorAll('.show_details ul li div button');

show_remove_button.forEach((e) =>
e.addEventListener('click', toggleText)
);
function toggleText(event){
  if(event.target.innerHTML ==='remove'){
    event.target.innerHTML = 'add';
    event.target.parentElement.parentElement.nextElementSibling.style.display = 'none'
    
    
  }else{
    event.target.innerHTML = 'remove';
    event.target.parentElement.parentElement.nextElementSibling.style.display = 'inline-block'

  }

}