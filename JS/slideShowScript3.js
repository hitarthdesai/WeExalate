var j = 0; 
showSlide3(j);

function changeSlides3(x) {showSlide3(j += x);}

function showSlide3(k)
{
    var service = document.getElementById("socialMediaAdvertisement");
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