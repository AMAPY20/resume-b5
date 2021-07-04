
var typed = new Typed('.animate', {
    strings: [
        "UX",
        "UX",
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true,
});



const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    // reset: true,
});

sr.reveal(`.profile-text, .contact-sr`, {
  origin: "top",
  delay: 200,
});

sr.reveal(`.profile, .experience`, {
  origin: "top",
  interval: 100,
  delay: 1000,
});
sr.reveal(`.reference`, {
  origin: "top",
  interval: 300,
//   delay: 1000,
});
sr.reveal(`.education,.title, .copy-right`, {
  origin: "buttom",
  interval: 300,
  //   delay: 1000,
});