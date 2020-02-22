var fullName = document.forms['regForm']['fullName'];
var initialName = document.forms['regForm']['initialName'];
var nationality = document.forms['regForm']['nationality'];
var gender = document.forms['regForm']['gender'];
var other = document.forms['regForm']['other'];
var birthDay = document.forms['regForm']['birthDay'];
var address = document.forms['regForm']['address'];
var email = document.forms['regForm']['email'];
var mobile = document.forms['regForm']['mobile'];
var medium = document.forms['regForm']['medium'];

var mf1 = document.forms['regForm']['mf1'];
var mf2 = document.forms['regForm']['mf2'];

var of1 = document.forms['regForm']['of1'];
var of2 = document.forms['regForm']['of2'];
var of3 = document.forms['regForm']['of3'];
var of4 = document.forms['regForm']['of4'];
var of5 = document.forms['regForm']['of5'];
var of6 = document.forms['regForm']['of6'];
var of7 = document.forms['regForm']['of7'];
var of8 = document.forms['regForm']['of8'];

var s1 = document.forms['regForm']['s1'];
var s2 = document.forms['regForm']['s2'];
var set1 = document.forms['regForm']['set1'];
var set2 = document.forms['regForm']['set2'];

var accept = document.forms['regForm']['accept'];
var a1 = document.forms['regForm']['a1'];
var a2 = document.forms['regForm']['a2'];
var a3 = document.forms['regForm']['a3'];

var a1_year = document.forms['regForm']['a1_year'];
var a1_physics = document.forms['regForm']['a1_physics'];
var a1_chem = document.forms['regForm']['a1_chem'];
var a1_maths = document.forms['regForm']['a1_maths'];
var a1_index = document.forms['regForm']['a1_index'];
var a1_z = document.forms['regForm']['a1_z'];
var result_year = document.forms['regForm']['result_year'];

var a2_year = document.forms['regForm']['a2_year'];
var a2_physics = document.forms['regForm']['a2_physics'];
var a2_chem = document.forms['regForm']['a2_chem'];
var a2_maths = document.forms['regForm']['a2_maths'];
var a2_index = document.forms['regForm']['a2_index'];
var a2_z = document.forms['regForm']['a2_z'];

var a3_year = document.forms['regForm']['a3_year'];
var a3_physics = document.forms['regForm']['a3_physics'];
var a3_chem = document.forms['regForm']['a3_chem'];
var a3_maths = document.forms['regForm']['a3_maths'];
var a3_index = document.forms['regForm']['a3_index'];
var a3_z = document.forms['regForm']['a3_z'];

				
				
				
				
function Validate() {
	

	
  if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    document.getElementById('fullName_error').style.color = "red";
    fullName_error.textContent = "full Name is required";
    fullName.focus();
    return false;
  }
      fullName_error.textContent = "";


 
  if (initialName.value == "") {
    initialName.style.border = "1px solid red";
    document.getElementById('initialName_error').style.color = "red";
    initialName_error.textContent = "initial name is required";
    initialName.focus();
    return false;
  }
      initialName_error.textContent = "";

  
  if (nationality.value == "") {
    nationality.style.border = "1px solid red";
    document.getElementById('nationality_error').style.color = "red";
    nationality_error.textContent = "nationality is required";
    nationality.focus();
    return false;
  }
      nationality_error.textContent = "";

  
  if (gender.value == 1) {
    document.getElementById('gender_error').innerHTML = "Gender required";
    gender.focus();
    return false;
  } 
  
      document.getElementById('gender_error').innerHTML = "";

  
  if (address.value == "") {
    address.style.border = "1px solid red";
    document.getElementById('address_error').style.color = "red";
    address_error.textContent = "address is required";
    address.focus();
    return false;
  }
      address_error.textContent = "";

  
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_error').style.color = "red";
    email_error.textContent = "email is required";
    email.focus();
    return false;
  }
      email_error.textContent = "";

  
  
  if (mobile.value == "") {
    mobile.style.border = "1px solid red";
    document.getElementById('mobile_error').style.color = "red";
    mobile_error.textContent = "mobile is required";
    mobile.focus();
    return false;
  }
      mobile_error.textContent = "";
	
	  
	if ((a1.checked == false && a2.checked== false) && a3.checked==false ) {
		document.getElementById('attemp_check').innerHTML = "Select least one";
		a1.focus();
    return false;
  } 
  		document.getElementById('attemp_check').innerHTML = "";

	if(a1.checked == true && (a1_year.value == 1 || a1_physics.value==1 || a1_chem.value==1 || a1_maths.value==1 || a1_index.value=="" || a1_z.value=="" || result_year.value=="1")){
		document.getElementById('a1_error').innerHTML = "Fill all data";
		a1_maths.focus();
		return false;
	}
		document.getElementById('a1_error').innerHTML = "";

	if(a2.checked == true && (a2_year.value == 1 || a2_physics.value==1 || a2_chem.value==1 || a2_maths.value==1 || a2_index.value=="" || a2_z.value=="" || result_year.value=="1")){
		document.getElementById('a2_error').innerHTML = "Fill all data";
		a2_maths.focus();
		return false;
	}
		document.getElementById('a2_error').innerHTML = "";

	if(a3.checked == true && (a3_year.value == 1 || a3_physics.value==1 || a3_chem.value==1 || a3_maths.value==1 || a3_index.value=="" || a3_z.value=="" || result_year.value=="1")){
		document.getElementById('a3_error').innerHTML = "Fill all data";
		a3_maths.focus();
		return false;
	}
		document.getElementById('a3_error').innerHTML = "";

	  
	 

	if (medium.value == 1) {
    medium.style.border = "1px solid red";
    document.getElementById('medium_error').style.color = "red";
    medium_error.textContent = "medium is required";
    medium.focus();
    return false;
  }
      medium_error.textContent = "";
	  
	  if (s1.checked== false && s2.checked== false) {
		
		document.getElementById('s2_error').style.color = "red";
		s2_error.textContent = "Select at least one field";
		s2.focus();
		return false;
	  }
     set2_error.textContent = "";
	  
	  
	  
	  if ((s1.checked == true) && (mf1.value== 1 || mf2.value==1) ) {
		document.getElementById('s1_error').innerHTML = "Select values for both.";
		mf1.focus();
		return false;
	  
	  }
	  document.getElementById('s1_error').innerHTML = "";

	if ((s1.checked == false) && (mf1.value!= 1 || mf2.value!=1) ) {
		document.getElementById('s1_error').innerHTML = "Please select the set 1";
		mf1.focus();
		return false;
	  
	  }
	  document.getElementById('s1_error').innerHTML = "";

	 /* --------------------------- */
	
	 if ((s2.checked == true) && (of1.value== 0 || of2.value==0 || of3.value== 0 || of4.value==0 || of5.value== 0 || of6.value==0 || of7.value== 0 || of8.value==0) ) {
		document.getElementById('s2_error').innerHTML = "Select values for all.";
		of1.focus();
		return false;
	  
	  }
	  document.getElementById('s2_error').innerHTML = "";

	if ((s2.checked != true) && (of1.value!= 0 || of2.value!=0 || of3.value!= 0 || of4.value!=0 || of5.value!= 0 || of6.value!=0 || of7.value!= 0 || of8.value!=0) ) {
		document.getElementById('s2_error').innerHTML = "Please select set 2.";
		of2.focus();
		return false;
	  
	  }
	  document.getElementById('s2_error').innerHTML = "";

	 
	 if((s1.checked == true && s2.checked == true) && set1.value== 1 ){
		document.getElementById('set2_error').innerHTML = "Please give the priority";
		set1.focus();
		return false;
			  
		}
			document.getElementById('set2_error').innerHTML = "";
	 
	
	
	if((s1.checked == true && s2.checked == true) && set2.value=="1" ){
		document.getElementById('set2_error').innerHTML = "Please give the priority";
		set1.focus();
		return false;
			  
		}
			document.getElementById('set2_error').innerHTML = "";
	 
	
	 

	if ((s1.checked== false || s2.checked== false) && set1.value != "1") {
		
		document.getElementById('set2_error').style.color = "red";
		set2_error.textContent = "You can't give priority because you are not select both fields";
		set2.focus();
		return false;
	  }
      set1_error.textContent = "";
	  
	if ((s1.checked== false || s2.checked== false) && set2.value != "1") {
		
		document.getElementById('set2_error').style.color = "red";
		set2_error.textContent = "You can't give priority because you are not select both fields";
		set2.focus();
		return false;
	  }
     set2_error.textContent = "";
	 
	
	
		
 
	 
	 
	

if (other.value == 1) {
    document.getElementById('other_error').innerHTML = "Details required";
    return false;
  } 
  
      document.getElementById('other_error').innerHTML = "";
 

if (accept.checked == false ) {
    document.getElementById('accept_error').innerHTML = "You should have to accept the condition";
    
    return false;
  } 
      document.getElementById('accept_error').innerHTML = "";


}