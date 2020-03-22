function makeBold() {
    var gettext= document.getElementById("Text");
    if (gettext.style.fontWeight=='bold')   
    {
        gettext.style.fontWeight='normal';
    }
else{
    gettext.style.fontWeight='bold';
}
   };


function makeItalic()
{   var  gettext=document.getElementById("Text");
if (gettext.style.fontStyle=='italic')
{
    gettext.style.fontStyle='normal';
}
else
{
     gettext.style.fontStyle="italic";

}};

function makeUnderline()
{ var gettext= document.getElementById("Text");
   if(gettext.style.textDecoration=="underline")
   {
    gettext.style.textDecoration="none";
    
   }
   else{
   gettext.style.textDecoration="underline"

}};
function changeSize()
{
    document.getElementById('Text').style.fontSize=document.getElementById('size').value
};
function changePolice(){
    document.getElementById('Text').style.fontFamily=document.getElementById('police').value
}







$(Document).on('click','.bot',function(){
    alert("this is go my code Track" );
    
    });

    $(document).ready(function(){

        $(".bot").mouseleave(function(){
          
          $(this).find(".view").hide();
    
     })});
     $(document).ready(function(){

        $(".bot").mouseenter(function(){
         
          $(this).find(".view").show();
    
     })});