//CV Dowloaden
var link = document.createElement('a');
link.href = url;
link.download = 'cv.pdf';
link.dispatchEvent(new MouseEvent('click'));

//Typing title
var typed = new Typed(".auto-typing", {
    strings: ["Murrel Venlo"],
    v: 100,
    backSpeed: 100,
    loop: true
})