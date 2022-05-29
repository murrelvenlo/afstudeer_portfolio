//CV Dowloaden
var link = document.createElement('a');
link.href = url;
link.download = 'cv.pdf';
link.dispatchEvent(new MouseEvent('click'));