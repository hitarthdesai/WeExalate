var j = 0; 
showSlide1(j);

function changeSlides1(x) {showSlide1(j += x);}

function showSlide1(k)
{
    var service = document.getElementById("websiteDevelopment");
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