var toggleflag = 0;
function toggleText(elementid) {
  toggleflag++;
  var paraId = "para" + elementid[elementid.length - 1];
  var paragraph = document.getElementById(paraId);
  if (toggleflag % 2 === 1) {
    document.getElementById(elementid).innerHTML = "Show Less";
    //console.log(elementid);
    paragraph.getElementsByClassName("hiddentext")[0].style.display = "inline";
  }
  else
  {
    document.getElementById(elementid).innerHTML = "Read More";
    paragraph.getElementsByClassName("hiddentext")[0].style.display = "none";

  }

  //console.log(paragraph.getElementsByClassName("hiddentext"));
}
function goToAbout()
{

  document.getElementById("blogs").style.display = "none";
  document.getElementById("aboutinfo").style.display = "block";
  document.getElementById("contactinfo").style.display = "none";

  document.getElementById("showcasehome").style.display = "none";
  document.getElementById("showcaseabout").style.display = "block";
  document.getElementById("showcasecontact").style.display = "none";


}
function goToHome()
{
  document.getElementById("blogs").style.display = "block";
  document.getElementById("aboutinfo").style.display = "none";
  document.getElementById("contactinfo").style.display = "none";
  document.getElementById("showcasehome").style.display = "block";
  document.getElementById("showcaseabout").style.display = "none";
  document.getElementById("showcasecontact").style.display = "none";

}
function goToContact()
{
  document.getElementById("blogs").style.display = "none";
  document.getElementById("aboutinfo").style.display = "none";
  document.getElementById("contactinfo").style.display ="block";
  document.getElementById("showcasehome").style.display = "none";
  document.getElementById("showcaseabout").style.display = "none";
  document.getElementById("showcasecontact").style.display = "block";

}

