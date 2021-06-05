var dropDownContainer = document.getElementById("hoverToAppear");
function appear()
{
    document.getElementsByClassName("sub")[0].style.visibility = "visible"
}
function disappear()
{
    document.getElementsByClassName("sub")[0].style.visibility = "hidden"
}
dropDownContainer.addEventListener("click", appear);
document.getElementsByClassName("sub")[0].addEventListener("mouseleave", disappear);
// dropDownContainer.addEventListener("mouseleave", disappear);