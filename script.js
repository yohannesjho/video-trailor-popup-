const btnEl=document.querySelector('.btn');

const iconEl=document.querySelector('.close-icon')

const videoContainerEl=document.querySelector('.video-container');

btnEl.addEventListener('click',()=>{
   videoContainerEl.classList.remove('active');
})