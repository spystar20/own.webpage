
document.querySelector(".menu").addEventListener("click",()=>{
document.querySelector(".list").style.visibility="visible"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".list").style.visibility="hidden"  
})

document.querySelector(".home").addEventListener("click",()=>{
    document.querySelector(".page1").scrollIntoView({behavior:"smooth"})
    document.querySelector(".list").style.visibility="hidden"  
})
document.querySelector(".projects").addEventListener("click",()=>{
    document.querySelector(".page2").scrollIntoView({behavior:"smooth"})
    document.querySelector(".list").style.visibility="hidden"  
})
document.querySelector(".contact").addEventListener("click",()=>{
    document.querySelector(".pg3").scrollIntoView({behavior:"smooth"})
    document.querySelector(".list").style.visibility="hidden"  
})