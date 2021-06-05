var j = 0; 
showSlide2(j);

function changeSlides2(x) {showSlide2(j += x);}

function showSlide2(k)
{
    var service = document.getElementById("graphicsProcessing");
    var slides = service.getElementsByClassName("slide");
    var n = slides.length;

    for (var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    if(k>=n) {j=0;}
    if(k<0) {j=n-1;}

    slides[j].style.display = "block";
}