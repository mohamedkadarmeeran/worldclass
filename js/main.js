// index hamberger function
$(document).ready(function(){
    $('.worldclassHeader__menu').click(function(){
        $('.navbarli').toggle();
    });
});




//form validation
Submit = () =>{ 
  var container =document.getElementById("container");
  var back = document.getElementById("back");
    var success= document.getElementById("success");
    success.style.display = 'none';
    var emailStandard = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    var txtname = document.getElementById("name");
    var txtEmail = document.getElementById("email");
     var txtNumber = document.getElementById("phoneno"); 
      var txtMsg = document.getElementById("message");  
        var e = document.getElementById("select");
      var strUser = e.options[e.selectedIndex];  
      var errname = document.getElementById("errname"); 
    var errEmail= document.getElementById("erremail"); 
     var errNum = document.getElementById("errphoneno");  
    var errMsg= document.getElementById("errmsg"); 
    
   
  	 if(txtname.value===""){
        errname.innerHTML="Please Enter the Name";
        errname.style.display="block";   
    }
    
    if(txtname.value !== ""){ 
        errname.style.display="none";    
    } 

    if(txtEmail.value ==="" ){
        errEmail.style.display="block";
    }	
    if(txtEmail.value !== ""){  
        if(emailStandard.test(txtEmail.value)== true){ 
            errEmail.style.display="none"; 
        }
        if(emailStandard.test(txtEmail.value)== false){ 
             errEmail.innerHTML="Please Enter valid Email id";
            errEmail.style.display="block"; 
        }
    } 

    if(strUser.value ==0){
      errdropdown.innerHTML = "Please Select the Drop Down Box";
       errdropdown.style.display="block";
  }
  if(strUser.value !=0){ 
       errdropdown.style.display="none";
  }

  if(txtMsg.value===""){
        errMsg.innerHTML="Please Enter the Message box";
        errMsg.style.display="block";   
    }
    
    if(txtMsg.value !== ""){ 
        errMsg.style.display="none";    
    }


     if(txtNumber.value ===""){
      errNum.innerHTML = "Please Enter the Number";
      errphoneno.style.display="block";
  }
  if(txtNumber.value !== "") { 
      if(isNaN(txtNumber.value))
      {
          errNum.innerHTML = "Please Enter Phone Number only";
          errphoneno.style.display="block";
      return false;
      }
     else if((txtNumber.value.length != 10))
      {
          errNum.innerHTML = " Mobile Number should be in 10 digit";
          errphoneno.style.display="block";
      return false;
      }
      else{ errphoneno.style.display="none";}
  }
 

    
    // if(selectOptions.value ==0){
    //     errdrop.style.display="block";
    // }
    // if(selectOptions.value !=0){ 
    //     // this.setState({select:"none"});
    // }
if((emailStandard.test(txtEmail.value)== true) && txtname.value !== "" && txtMsg.value.length >= 1 && txtEmail.value !== "" &&  strUser.value !=0 &&  txtMsg.value !=="" && txtNumber.value !== "" ){
        success.style.display="block";
        txtname.value="";
        txtEmail.value=""; 
        e.selectedIndex = 0;
         txtMsg.value="";
        txtNumber.value="";
        container.style.display = "none";
        back.style.display = "block";
       
    }
    else {
      success.style.display="none";


    }
}



$(document).ready(function(){
  $("#westa").click(function(){
    $(".westmain").show();
    $("#westmain2").hide();
    $("#westmain3").hide();
    $("#westmain4").hide()
    $("#westmain5").hide()
    $("#westmain6").hide();
  });
  $("#westa").click(function(){
    $('#westa').css('background', '#333333' ,'opacity', 'inherit');
    $('#west2').css('background', '#999999' );
    $('#west3').css('background', '#999999' );
    $('#west4').css('background', '#999999' );
    $('#west5').css('background', '#999999' );
    $('#west6').css('background', '#999999' );
  });
});

$(document).ready(function(){
  $("#west2").click(function(){
    $(".westmain").hide();
     $("#westmain2").show();
    $("#westmain3").hide();
    $("#westmain4").hide()
    $("#westmain5").hide()
    $("#westmain6").hide();
  });
  $("#west2").click(function(){
    $('#west2').css('background', '#333333' ,'opacity', 'none');
    $('#westa').css('background', '#999999' ,'opacity', '0');
    $('#west3').css('background', '#999999' ,'opacity', '0');
    $('#west4').css('background', '#999999' ,'opacity', '0');
    $('#west5').css('background', '#999999' ,'opacity', '0');
    $('#west6').css('background', '#999999' ,'opacity', '0');
  });
});


$(document).ready(function(){
  $("#west3").click(function(){
    $(".westmain").hide();
     $("#westmain2").hide();
    $("#westmain3").show();
    $("#westmain4").hide()
    $("#westmain5").hide()
    $("#westmain6").hide();
  });
  $("#west3").click(function(){
    $('#west3').css('background', '#333333' ,'opacity', 'inherit');
    $('#west2').css('background', '#999999' );
    $('#westa').css('background', '#999999' );
    $('#west4').css('background', '#999999' );
    $('#west5').css('background', '#999999' );
    $('#west6').css('background', '#999999' );
  });
});


$(document).ready(function(){
  $("#west4").click(function(){
      $(".westmain").hide();
    $("#westmain2").hide();
    $("#westmain3").hide();
     $("#westmain4").show();
    $("#westmain5").hide()
    $("#westmain6").hide();
  });
  $("#west4").click(function(){
    $('#west4').css('background', '#333333' ,'opacity', 'inherit');
    $('#west2').css('background', '#999999' );
    $('#west3').css('background', '#999999' );
    $('#westa').css('background', '#999999' );
    $('#west5').css('background', '#999999' );
    $('#west6').css('background', '#999999' );
  });
});

$(document).ready(function(){
  $("#west5").click(function(){
        $(".westmain").hide()
    $("#westmain2").hide();
    $("#westmain3").hide();
    $("#westmain4").hide()
   $("#westmain5").show();
    $("#westmain6").hide();
  });
  $("#west5").click(function(){
    $('#west5').css('background', '#333333' ,'opacity', 'inherit');
    $('#west2').css('background', '#999999' );
    $('#west3').css('background', '#999999' );
    $('#west4').css('background', '#999999' );
    $('#westa').css('background', '#999999' );
    $('#west6').css('background', '#999999' );
  });
});

$(document).ready(function(){
  $("#west6").click(function(){
    $(".westmain").hide();
    $("#westmain2").hide();
    $("#westmain3").hide();
    $("#westmain4").hide()
    $("#westmain5").hide()
        $("#westmain6").show();
  });
  $("#west6").click(function(){
    $('#west6').css('background', '#333333' ,'opacity', 'inherit');
    $('#west2').css('background', '#999999' );
    $('#west3').css('background', '#999999' );
    $('#west4').css('background', '#999999' );
    $('#west5').css('background', '#999999' );
    $('#westa').css('background', '#999999' );
  });
});


$(document).ready(function(){
$('#westbutton1').click(function(){ 
    $('#select').val('1');
});
$('#westbutton1a').click(function(){ 
    $('#select').val('1');
});
});
$(document).ready(function(){
$('#westbutton2').click(function(){ 
    $('#select').val('2');
});
$('#westbutton2a').click(function(){ 
    $('#select').val('2');
});
});
$(document).ready(function(){
$('#westbutton3').click(function(){ 
    $('#select').val('3');
});
$('#westbutton3a').click(function(){ 
    $('#select').val('3');
});
});
$(document).ready(function(){
$('#westbutton4').click(function(){ 
    $('#select').val('4');
});
$('#westbutton4a').click(function(){ 
    $('#select').val('4');
});
});
$(document).ready(function(){
$('#westbutton5').click(function(){ 
    $('#select').val('5');
});
$('#westbutton5a').click(function(){ 
    $('#select').val('5');
});
});
$(document).ready(function(){
$('#westbutton6').click(function(){ 
    $('#select').val('6');
});
$('#westbutton6a').click(function(){ 
    $('#select').val('6');
});
});

$(document).ready(function(){
$("#westbutton1").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
$("#westbutton1a").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
});
$(document).ready(function(){
$("#westbutton2").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
$("#westbutton2a").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
});
$(document).ready(function(){
$("#westbutton3").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
$("#westbutton3a").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
});
$(document).ready(function(){
$("#westbutton4").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
$("#westbutton4a").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
});
$(document).ready(function(){
$("#westbutton5").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
$("#westbutton5a").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
});
$(document).ready(function(){
$("#westbutton6").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
$("#westbutton6a").click(function() {
    $('html,body').animate({
        scrollTop: $("#select").offset().top},
        'slow');
});
});