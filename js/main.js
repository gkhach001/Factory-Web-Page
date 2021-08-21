$(document).ready(function(){
	  //responsive menu
	  $(".open_menu").click(function(){
	  $(".mob_menu").slideToggle(1000);
	  
	  $(".open_menu span:nth-of-type(1)").toggleClass('cross1');
	  $(".open_menu span:nth-of-type(2)").toggleClass('cross2');
	  $(".open_menu span:nth-of-type(3)").toggleClass('cross3');
	  })
		$('.owl-carousel').owlCarousel({
		  loop: true,
		  nav: true,
		  autoplay: true,
		  autoplayTimeout: 4000,
		  smartSpeed: 1000,
		  margin: 10,
		  dots: true,
		  autoplayHoverPause: true,
		  center: true,
		  responsiveClass: true,
		  responsive: {
			0: {
			  items: 1
			},
			600: {
			  items: 1
			},
			1000: {
			  items: 3
			}
		  }
		});
	});



let btn=document.querySelector("#btn");
btn.onclick=function(){
    let name=document.querySelector("#name").value;
    let phone=document.querySelector("#phone").value;
    let email=document.querySelector("#email").value;
    let regMail = /^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/;
    let regPhone=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(name.value!=""){
        is_ok_req = true;
		document.querySelector('.error').style.display='block'
    }
    else{
        is_ok_req = false;
        document.querySelector('.error').style.display="none";
    }
    if(email.value!="" &&regMail.test(email.value)){
        is_ok_email = true;
       document.querySelector('.e-error').style.display="none";
   }
   else{
       is_ok_email = false;
       document.querySelector('.e-error').style.display="block";
   }
   if(phone.value!="" && regPhone.test(phone.value)){
    document.querySelector('.p-error').style.display="none";
   }
   else{
    document.querySelector('.p-error').style.display="block";
   }
    return false;
}