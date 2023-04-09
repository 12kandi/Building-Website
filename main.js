//////////////////////////////////////////////////////////////////////////
// referance: https://codecary.com/sticky-navigation-bar-on-scroll-using-vanilla-javascript/
window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 40);
  })
  /////////////////////////////////////////////////////////////////
//hide show nav 
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector(".open_menu_btn");
const closebtn = document.querySelector(".close_menu_btn");

menubtn.addEventListener("click",() => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

const closemenu = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}

closebtn.addEventListener("click",closemenu);
// show about_more_para
const more_about = document.querySelectorAll('.more_about_article');
more_about.forEach(more_about_article=>{
    more_about_article.addEventListener("click",() => {
        more_about_article.classList.toggle('open');
        //change icone

       
        
    })
})
