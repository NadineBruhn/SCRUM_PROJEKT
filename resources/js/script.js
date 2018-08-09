// MENU AREA
function burgerMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// KONTAKT FORM
function validate() {
  var fname = document.forms["myForm"]["firstname"].value;
  var Email = document.getElementById('mail');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var letters = /^[A-ZÆØÅa-zæøå ]+$/;
  var formstatus = 1;
  var confirm_message ="Tak for din mail";

// VED KORREEKT INDTAST GÅR TILBAGE TIL START CSS
  document.forms["myForm"]["firstname"].placeholder = "Fornavn";
  document.forms["myForm"]["firstname"].style.borderColor = "#ccc";

    if (fname =="") {
      document.forms["myForm"]["firstname"].placeholder = "Udfyld feltet";
      document.forms["myForm"]["firstname"].style.borderColor = "red";
      // alert("Venligst udfyld alle felter");
      console.log("test");
      formstatus = 0;
    }

    if (!letters.test(fname)) {
      alert('Du kan ikke bruge tal');
      console.log("test_tal");
      formstatus = 0;
     }

    if (!filter.test(Email.value)) {
      var Email = document.getElementById('mail').placeholder = "Indtast korrekt mail";
      var Email = document.getElementById('mail').style.borderColor = "red";
      // alert('Indtast korrekt mail');
      console.log("test_mail");
      formstatus = 0;
  }
     if (formstatus == 0) {
        // return false;
        console.log("hej")
   }

   if(formstatus){
   if(confirm(confirm_message)) {
    location.reload();
  }
 }
}


// BANNER BILLEDE
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
