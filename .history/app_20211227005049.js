const options=document.querySelectorAll('.user-btn');
[...options].forEach(item=>{
  item.addEventListener('click',function(e){
    e.preventDefault();
    [...options].forEach(item=>item.classList.remove("user-btn"))
    e.target.classList.add('active');
  })
})