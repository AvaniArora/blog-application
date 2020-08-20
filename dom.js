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