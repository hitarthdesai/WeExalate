var tagline = "omplete Web Solution, Simplified! ";
var length = tagline.length;
var speed = 200;
var i = 0;

function printChar()
{
    if(i <= length)
    {
        document.getElementById("tagLine").innerHTML += tagline.charAt(i);
        setTimeout(printChar, speed);
        i++;
    }

    if(i == length)
    {
        i = 0;
        document.getElementById("tagLine").innerHTML = "C";
    }
}