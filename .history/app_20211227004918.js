const options=document.querySelectorAll('.user-btn');
[...options].forEach(item=>{
  item.addEventListener('click',function(e){
    e.preventDefault();
  })
})