  const moreInfoButton = document.querySelectorAll('.contact_us .info button');
      moreInfoButton.forEach((e) =>
        e.addEventListener('click', toggleinfo)
      );
      function toggleinfo(event) {
          if(event.target.innerHTML === "remove"){
              event.target.innerHTML= 'add';
              console.log(event)
              
              event.target.parentElement.nextElementSibling.classList.remove('ul_appear_onClick')
          }else{
            event.target.innerHTML= 'remove';
            event.target.parentElement.nextElementSibling.classList.add('ul_appear_onClick')

          }
          
         
      };
