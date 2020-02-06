const image = document.querySelector(".image_js")
document.addEventListener("scroll",(e)=>{
  if(window.scrollY < window.innerHeight/2){
    const scrollPercentage = (window.scrollY * 100)/window.innerHeight
    image.style.transform = `scale(${1-(scrollPercentage*0.012)})`
  }
})
