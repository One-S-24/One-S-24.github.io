const sr = ScrollReveal({
    distant : '50px',
    delay : 600,
    duration : 1000,
})

sr.reveal('.wrapper', {origin: 'bottom', distance: '80px', 
    duration: 1400, delay: 400})
    
sr.reveal('.img1', {origin: 'bottom', distance: '80px', 
    duration: 1500, delay: 500})

sr.reveal('.img2', {origin: 'top', distance: '80px', 
    duration: 1500, delay: 700})

sr.reveal('.img3', {origin: 'bottom', distance: '80px', 
        duration: 1500, delay: 900})       


var wrapper = document.querySelector('.wrapper');
var signuplink = document.querySelector('.signup-link');
var loginlink = document.querySelector('.login-link');
signuplink.onclick = () =>{
    wrapper.classList.add("active");
}
loginlink.onclick = () =>{
    wrapper.classList.remove("active");
}


function redirigirADashboard() {
    window.location.href = "admin.html";
  }
  
  function redirigirALogin() {
    window.location.href = "admin.html"; 
  }