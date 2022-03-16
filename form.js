var v1="";
var v2="";
function formChange(){
	var c1=document.getElementById("Fresh-Passport")
	var c2=document.getElementById("Re-issues-of-Passport");
	
	console.log("the value of check box is "+typeof(c1.checked));
	console.log("the value of c1 "+c1.checked);
	console.log("the value of c2 "+c2.checked);
	if(c1.checked){
		document.getElementById('Due-to-Expire').disabled=true;
		document.getElementById('Exhaustion-of-ages').disabled=true;
		document.getElementById('3-years-ago').disabled=true;
		document.getElementById('Lost-Passport').disabled=true;
		document.getElementById('Personal-Particulars').disabled=true;
		document.getElementById('Damaged-Passport').disabled=true;
		
		document.getElementById('Appearance').disabled=true;
		document.getElementById('Signature').disabled=true;
		document.getElementById('GivenName').disabled=true;
		document.getElementById('Surname').disabled=true;
		document.getElementById('Date-of-Birth').disabled=true;
		document.getElementById('Spouse-Name').disabled=true;
		document.getElementById('Address').disabled=true;
		document.getElementById('Delete-ECR').disabled=true;
		document.getElementById('Others').disabled=true;
	}else if(c2.checked){
		document.getElementById('Due-to-Expire').disabled=false;
		document.getElementById('Exhaustion-of-ages').disabled=false;
		document.getElementById('3-years-ago').disabled=false;
		document.getElementById('Lost-Passport').disabled=false;
		document.getElementById('Personal-Particulars').disabled=false;
		document.getElementById('Damaged-Passport').disabled=false;
		if(document.getElementById("Personal-Particulars").checked){
			enable();
		}
		if(document.getElementById("Due-to-Expire").checked){
			disable();
		}
		if(document.getElementById("Exhaustion-of-ages").checked){
			disable();
		}
		if(document.getElementById("3-years-ago").checked){
			disable();
		}
		if(document.getElementById("Lost-Passport").checked){
			disable();
		}
		if(document.getElementById("Damaged-Passport").checked){
			disable();
		}	
	}else{
		if(document.getElementById("Personal-Particulars").checked){
			enable();
		}
		if(document.getElementById("Due-to-Expire").checked){
			disable();
		}
		if(document.getElementById("Exhaustion-of-ages").checked){
			disable();
		}
		if(document.getElementById("3-years-ago").checked){
			disable();
		}
		if(document.getElementById("Lost-Passport").checked){
			disable();
		}
		if(document.getElementById("Damaged-Passport").checked){
			disable();
		}
	}
	if(document.getElementById("yes5").checked){
		document.getElementById("em1").disabled=true;
		document.getElementById("em2").disabled=true;
		document.getElementById("em3").disabled=true;
	}else if(document.getElementById("no5").checked){
		document.getElementById("em1").disabled=false;
		document.getElementById("em2").disabled=false;
		document.getElementById("em3").disabled=false;
	}
}
function Submit(){
	document.getElementById("exception").innerHTML="";
	var value=document.getElementById("fileNumber").value;

	
	var number
	var msg="";
	if(value===""){
		check(1,"plase enter the file Number","fileNumber");
	}
	else if(value.length<12){
		check(1,"Please enter the File Number with 12 digit character and no special characters","fileNumber");
	}else if(value.length>12){
		check(1,"Please enter the File Number with 12 digit character and no special characters","fileNumber");
	}else if(containsSpecialChars(value)){
		check(1,"Please enter the File Number with 12 digit character and no special characters","fileNumber");
	}else if(!isNaN(value.charAt(0))){
		check(1,"Please enter the File Number with 12 digit character and no special characters","fileNumber");
	}
	
	var value=document.getElementById("ImageUpload").value;
	if(value===""){
		check(1.2,"please upload Image","ImageUpload");
	}
	
	var value=document.getElementById("SignatureImage").value;
	if(value===""){
		check(1.3,"please upload Signature","SignatureImage");
	}
	var c1=document.getElementById("Normal");
	var c2=document.getElementById("Tatkaal");
	number=1.4
	msg="please select one checkBox";
	if(c1.checked==false && c2.checked==false){
		check(number,msg,"Normal");
	}else if(c1.checked==true && c2.checked==true){
		check(number,msg,"Tatkaal");
	}
	
	var c1=document.getElementById("36-Pages");
	var c2=document.getElementById("60-Pages");
	number=1.5
	msg="please select one checkBox";
	if(c1.checked==false && c2.checked==false){
		check(number,msg,"36-Pages");
	}else if(c1.checked==true && c2.checked==true){
		check(number,msg,"60-Pages");
	}
	
	var c1=document.getElementById("10-years");
	var c2=document.getElementById("Up-to-age-18");
	number=1.6
	msg="please select one checkBox";
	if(c1.checked==false && c2.checked==false){
		check(number,msg,"10-years");
	}else if(c1.checked==true && c2.checked==true){
		check(number,msg,"Up-to-age-18");
	}
	
	var value=document.getElementById("ApplicantName").value;
	if(value===""){
		check(2.1,"please Enter the userName","ApplicantName"); 
	}
	else if(containsSpecialChars(value)){
		check(2.1,"Please don't enter special character","ApplicantName");
	}
	else if(checkIfContainsNumber(value)){
		check(2.1,"please don't enter the name with number","ApplicantName");
	}
	
	var value=document.getElementById("ApplicantSurName").value;
	if(value===""){
		check(2.1,"please Enter the userSurName","ApplicantSurName"); 
	}
	if(containsSpecialChars(value)){
		check(2.1,"Please don't enter special character","ApplicantSurName");
	}
	if(checkIfContainsNumber(value)){
		check(2.1,"please don't enter the name with number","ApplicantSurName");
	}
	
	var c1=document.getElementById("yes1");
	var c2=document.getElementById("no1");
	number=2.2
	msg="please select one checkBox";
	if(c1.checked==false && c2.checked==false){
		check(number,msg ,"yes1");
	}else if(c1.checked==true && c2.checked==true){
		check(number,msg,"no1");
	}
	
	var c1=document.getElementById("yes2");
	var c2=document.getElementById("no2");
	if(c1.checked==false && c2.checked==false){
		check(2.3,"please select one checkBox","yes2");
	}else if(c1.checked==true && c2.checked==true){
		check(2.3,"please select one checkBox","no2");
	}
	
	var BirthPlace=document.getElementById("BirthPlace").value;
	var District=document.getElementById("District").value;
	var State=document.getElementById("State").value;
	var Region=document.getElementById("Region").value;
	if(BirthPlace==="" || District==="" || State==="" || Region===""){
		check(2.5,"Birthplace, District, State, City can't have special characters or numbers or can't be empty or similar values","BirthPlace");
	}
	else if((BirthPlace ==District) || (BirthPlace ==State) || (BirthPlace ==Region)){
		check(2.5,"Birthplace, District, State, City can't have special characters or numbers or can't be empty or similar values","BirthPlace");
	}else if( containsSpecialChars(BirthPlace) || containsSpecialChars(District)||
	containsSpecialChars(State) || containsSpecialChars(Region)){
		check(2.5,"Birthplace, District, State, City can't have special characters or numbers or can't be empty or similar values","BirthPlace");
	}else if( checkIfContainsNumber(BirthPlace) || checkIfContainsNumber(District)||
	checkIfContainsNumber(State) || checkIfContainsNumber(Region)){
		check(2.5,"Birthplace, District, State, City can't have special characters or numbers or can't be empty or similar values","BirthPlace");
	}
	
	var c1=document.getElementById("male");
	var c2=document.getElementById("female");
	var c3=document.getElementById("Transgender");
	if(c1.checked==false && c2.checked==false && c3.checked==false){
		check(2.6,"please select one checkBox","male");
	}else if(c1.checked==true && c2.checked==true && c3.checked==true){
		check(2.6,"please select one checkBox","male");
	}
	var c1=document.getElementById("single");
	var c2=document.getElementById("married");
	var c3=document.getElementById("divorced");
	var c4=document.getElementById("Widow");
	var c5=document.getElementById("Separated");
	if(c1.checked==false && c2.checked==false && 
	c3.checked==false && c4.checked==false && c5.checked==false ){
		check(2.7,"please select one checkBox","single");
	}else if(c1.checked==true && c2.checked==true && 
	c3.checked==true && c4.checked==true && c5.checked==true ){
		check(2.7,"please select one checkBox","single");
	}
	
	var value=document.getElementById("pan").value;
	if(value===""){
		check(2.9,"please fill your Pan Number","pan");
	}
	if(containsSpecialChars(value)){
		check(2.9,"please don't enter special character","pan");
	}
	
	var voter=document.getElementById("VoterId").value.toUpperCase();
	document.getElementById("VoterId").value=voter;
	console.log("the value of voter ID",voter);
	if(voter===""){
		check(2.10," please fill your Voter ID","VoterId");
	}else if(containsSpecialChars(voter)){
		check(2.10,"Voter ID can't contain special character","VoterId");
	}
	
	
	var c1=document.getElementById("Private");
	var c2=document.getElementById("Homemaker");
	var c3=document.getElementById("Not");
	var c4=document.getElementById("Retired-Private");
	var c5=document.getElementById("Student");
	if(c1.checked==false && c2.checked==false && 
	c3.checked==false && c4.checked==false && c5.checked==false ){
		check(2.11,"please select one checkBox","Private");
	}else if(c1.checked==true && c2.checked==true && 
	c3.checked==true && c4.checked==true && c5.checked==true ){
		check(2.11,"please select one checkBox","Private");
	}
	
	
	var value=document.getElementById("organization").value;
	if(value===""){
		check(2.12,"please fill your organization","organization");
	}
	else if(containsSpecialChars(value)){
		check(2.12,"please don't enter the special character","organization")
	}else if(value.length>60){
		check(2.12,"please don't enter more than 60 character","organization");
	}
	
	var c1=document.getElementById("yes3");
	console.log("the value of c1 in 2.13",c1.checked);
	var c2=document.getElementById("no3");
	console.log("the value of c2 in 2.13",c1.checked);
	if(c1.checked==false && c2.checked==false){
		check(2.13,"please select one checkBox","yes3");
	}else if(c1.checked==true && c2.checked==true){
		check(2.13,"please select one checkBox","yes3");
	}
	
	
	var c1=document.getElementById("7th");
	var c2=document.getElementById("8th");
	var c3=document.getElementById("10th");
	var c4=document.getElementById("Graduate");
	if(c1.checked==false && c2.checked==false && 
	c3.checked==false && c4.checked==false){
		check(2.14,"please select one checkBox","7th");
	}else if(c1.checked==true && c2.checked==true && 
	c3.checked==true && c4.checked==true){
		check(2.14,"please select one checkBox","7th");
	}
	
	var c1=document.getElementById("yes4");
	var c2=document.getElementById("no4");
	if(c1.checked==false && c2.checked==false){
		check(2.15,"please select one checkBox","yes4");
	}else if(c1.checked==true && c2.checked==true){
		check(2.15,"please select one checkBox","yes4");
		
	}
	
	var value=document.getElementById("mark").value;
	if(value===""){
		check(2.16,"please fill your Pan Number");
	}
	
	var value=document.getElementById("Aadhar").value;
	if(value===""){
		check(2.17,"please fill your adhar card Number","Aadhar");
	}else if(value.length<12){
		check(2.17,"this field contains only 12 digit number,no special character, no alphabte","Aadhar");
	}else if(value.length>12){
		check(2.17,"this field contains only 12 digit number,no special character, no alphabte","Aadhar")
	}else if(containsSpecialChars(value)){
		check(2.17,"this field contains only 12 digit number,no special character, no alphabte","Aadhar");
	}else if(checkIfContainsLetter(value)){
		check(2.17,"this field contains only 12 digit number,no special character, no alphabte","Aadhar");
	}
	
	var value=document.getElementById("FatherName").value;
	if(value===""){
		check(3.1,"please fill your Father Name","FatherName");
	}else if(containsSpecialChars(value)){
		check(3.1,"this field contains only alphabates and min length should be 60 words","FatherName");
	}else if(checkIfContainsNumber(value)){
		check(3.1,"this field contains only alphabates and min length should be 60 words","FatherName");
	}else if(value.length>60){
		check(3.1,"this field contains only alphabates and min length should be 60 words","FatherName");
	}
	
	var value=document.getElementById("FatherSurname").value;
	if(value===""){
		check(3.1,"please fill your Father's Surname","FatherSurname");
	}else if(containsSpecialChars(value)){
		check(3.1,"this field contains only alphabates and min length should be 60 words","FatherSurname");
	}else if(checkIfContainsNumber(value)){
		check(3.1,"this field contains only alphabates and min length should be 60 words","FatherSurname");
	}else if(value.length>60){
		check(3.1,"this field contains only alphabates and min length should be 60 words","FatherSurname");
	}
	
	var value=document.getElementById("MotherName").value;
	if(value===""){
		check(3.2,"please fill your Mother Name","MotherName");
	}else if(containsSpecialChars(value)){
		check(3.2,"this field contains only alphabates and min length should be 60 words","MotherName");
	}else if(checkIfContainsNumber(value)){
		check(3.2,"this field contains only alphabates and min length should be 60 words","MotherName");
	}else if(value.length>60){
		check(3.2,"this field contains only alphabates and min length should be 60 words","MotherName");
	}
	
	var value=document.getElementById("MotherSurname").value;
	if(value===""){
		check(3.2,"please fill your Mother's Surname","MotherSurname");
	}else if(containsSpecialChars(value)){
		check(3.2,"this field contains only alphabates and min length should be 60 words","MotherSurname");
	}else if(checkIfContainsNumber(value)){
		check(3.2,"this field contains only alphabates and min length should be 60 words","MotherSurname");
	}else if(value.length>60){
		check(3.2,"this field contains only alphabates and min length should be 60 words","MotherSurname");
	}
	
	
	var value=document.getElementById("legalGuardianName").value;
	if(value===""){
		check(3.3,"please fill your legalGuardianName's Surname","legalGuardianName");
	}else if(containsSpecialChars(value)){
		check(3.3,"this field contains only alphabates and min length should be 60 words","legalGuardianName");
	}else if(checkIfContainsNumber(value)){
		check(3.3,"this field contains only alphabates and min length should be 60 words","legalGuardianName");
	}else if(value.length>60){
		check(3.3,"this field contains only alphabates and min length should be 60 words","legalGuardianName");
	}
	
	var value=document.getElementById("legalGuardianSurName").value;
	if(value===""){
		check(3.3,"please fill your legalGuardianName's Surname","legalGuardianSurName");
	}else if(containsSpecialChars(value)){
		check(3.3,"this field contains only alphabates and min length should be 60 words","legalGuardianSurName");
	}else if(checkIfContainsNumber(value)){
		check(3.3,"this field contains only alphabates and min length should be 60 words","legalGuardianSurName");
	}else if(value.length>60){
		check(3.3,"this field contains only alphabates and min length should be 60 words","legalGuardianSurName");
	}
	
	var value=document.getElementById("SpouseName").value;
	if(value===""){
		check(3.4,"please fill your SpouseName's Surname","SpouseName");
	}else if(containsSpecialChars(value)){
		check(3.4,"this field contains only alphabates and min length should be 60 words","SpouseName");
	}else if(checkIfContainsNumber(value)){
		check(3.4,"this field contains only alphabates and min length should be 60 words","SpouseName");
	}else if(value.length>60){
		check(3.4,"this field contains only alphabates and min length should be 60 words","SpouseName");
	}
	
	var value=document.getElementById("SpouseSurName").value;
	if(value===""){
		check(3.4,"please fill your SpouseName's Surname","SpouseSurName");
	}else if(containsSpecialChars(value)){
		check(3.4,"this field contains only alphabates and min length should be 60 words","SpouseSurName");
	}else if(checkIfContainsNumber(value)){
		check(3.4,"this field contains only alphabates and min length should be 60 words","SpouseSurName");
	}else if(value.length>60){
		check(3.4,"this field contains only alphabates and min length should be 60 words","SpouseSurName");
	}
	
	
	
	
	var value=document.getElementById("HouseNO").value;
	if(value===""){
		check(4.1,"please fill your House Number","HouseNO");
	}else if(value.length<10 || value.length>500){
		check(4.1,"house Number should having minimum length of 10 character and should not have special character","HouseNO");
	}else if(containsSomeSpecialChars(value)){
		check(4.1,"house Number should having minimum length of 10 character and should not have special character","HouseNO");
	}
	
	var value=document.getElementById("City").value;
	if(value===""){
		check(4.1,"please fill your City","City")
	}else if(checkIfContainsNumber(value)){
		check(4.1,"your City can't contain Number","City");
	}else if(containsSpecialChars(value)){
		check(4.1,"your City can't contain special character","City");
	}
	
	var value=document.getElementById("District").value;
	if(value===""){
		check(4.1,"please fill your District");
	}
	
	var value=document.getElementById("Police").value;
	if(value===""){
		check(4.1,"please fill your Police Station");
	}
	
	var value=document.getElementById("Pin").value;
	if(value===""){
		check(4.1,"please fill your Pin Number","Pin");
	}else if(value.length>6){
		check(4.1,"your Pin Number is greater than 6","Pin");
	}else if(containsSpecialChars(value)){
		check(4.1,"this feild contains maximum 6 digit and not having special character and alphabates, can't start with zero","Pin");
	}else if(value.charAt(0)){
		check(4.1,"this feild contains maximum 6 digit and not having special character and alphabates, can't start with zero","Pin");
	}else if(checkIfContainsLetter(value)){
		check(4.1,"this feild contains maximum 6 digit and not having special character and alphabates, can't start with zero","Pin");
	}
	var value=document.getElementById("MobileNo").value;
	if(value===""){
		check(4.1,"please fill your Mobile Number","MobileNo");
	}else if(checkIfContainsLetter(value)){
		check(4.1,"Mobile Number can't contain letter","MobileNo");
	}else if(containsSpecialChars(value)){
		check(4.1,"Mobile Number can't special character","MobileNo");
	}else if(value.length<10){
		check(4.1,"Mobile Number is less than 10digit","MobileNo");
	}else if(value.length>10){
		check(4.1,"Mobile Number is greater 10digit","MobileNo");
	}
	var value=document.getElementById("Email").value;
	if(value===""){
		check(4.1,"please fill your Email","Email")
	}else if(!value.includes("@")){
		check(4.1,"Email must include @ symbol","Email");
	}
	
	
	var c1=document.getElementById("yes5");
	var c2=document.getElementById("no5");
	if(c1.checked==false && c2.checked==false){
		check(4.2,"please select one checkBox");
	}else if(c1.checked==true && c2.checked==true){
		check(4.2,"please select one checkBox");
	}
	if(c1.checked===false){
		document.getElementById("em1").disabled=true;
	}
	var value=document.getElementById("CNumber").value;
	if(value===""){
		check(6.1,"please fill your passportNumber");
	}else if(value.length<8 || value.length>8){
		check(6.1,"passPost having only 8 character and not have special character");
	}else if(containsSomeSpecialChars(value)){
		check(6.1,"passPost having only 8 character and not have special character");
	}
	
	var value=document.getElementById("DateOfIssue").value;
	if(value===""){
		check(6.1,"please fill your Issue Date");
	}
	
	var DateOfIssue=document.getElementById("DateOfIssue");
	var ans="";
	DateOfIssue.addEventListener('change',function(){
		ans=DateOfIssue.value.substring(2,4);
	})

	
	
	
	var value=document.getElementById("Place").value;
	if(value===""){
		check(6.1,"please fill Place of Issue");
	}
	
	var c1=document.getElementById("yes6");
	var c2=document.getElementById("no6");
	if(c1.checked==false && c2.checked==false){
		check(6.2,"please select one checkBox");
	}else if(c1.checked==true && c2.checked==true){
		check(6.2,"please select one checkBox");
	}
	
	var value=document.getElementById("Fees").value;
	if(value===""){
		check(8.1,"please fill your Fees amount","Fees");
	}else if(containsSpecialChars(value)){
		check(8.1,"Fees amount should be only number","Fees");
	}else if(checkIfContainsLetter(value)){
		check(8.1,"remove alphabates,Fees amount should be only number","Fees");
	}
	
	var value=document.getElementById("DD").value;
	if(containsSpecialChars(value)){
		check(8.2,"DD amount should be only number","DD");
	}else if(checkIfContainsLetter(value)){
		check(8.2,"remove alphabates,DD amount should be only number","DD");
	}else if(value%1!=0){
		check(8.2,"demand draft should having amount without decimal","DD");
	}
	
	
	var value=document.getElementById("BankName").value;
	if(containsSpecialChars(value)){
		check(8.2,"this field contain alphabates,should not contain special character and number","BankName");
	}else if(checkIfContainsNumber(value)){
		check(8.2,"this field contain alphabates,should not contain special character and number","BankName");
	}
	var value=document.getElementById("Branch").value;
	if(containsSpecialChars(value)){
		check(8.2,"this field contain alphabates,should not contain special character and number","Branch");
	}else if(checkIfContainsNumber(value)){
		check(8.2,"this field contain alphabates,should not contain special character and number","Branch");
	}
	
	
	
	
	
	var value=document.getElementById("Place1").value;
	if(value===""){
		check(9,"enter your place","Place1");
	}else if(containsSpecialChars(value)){
		check(9,"this field contain alphabates,should not contain special character and number","Place1");
	}else if(checkIfContainsNumber(value)){
		check(9,"this field contain alphabates,should not contain special character and number","Place1");
	}
	
	var value=document.getElementById("Signature3").value;
	if(value===""){
		check(9,"enter your Signature");
	}else if(containsSpecialChars(value)){
		check(9,"signature should not conatains special character","Signature3");
	}else if(checkIfContainsNumber(value)){
		check(9,"Signature should not conatains number","Signature3");
	}
	
	var value=document.getElementById("issue4").value;

	if(value===""){
		check(9,"enter date");
	}	
}

function check(number,message,id){
		var a=document.createElement("a");
		var tag=document.createElement("p");
		tag.style.color="red";
		var text=document.createTextNode(`${number}.${message}`);
		tag.appendChild(text);
		a.appendChild(tag);
		a.href="#"+id;
		var div=document.getElementById("exception");
		div.appendChild(a);

}

function disable(){
	document.getElementById('Appearance').disabled=true;
	document.getElementById('Signature').disabled=true;
	document.getElementById('GivenName').disabled=true;
	document.getElementById('Surname').disabled=true;
	document.getElementById('Date-of-Birth').disabled=true;
	document.getElementById('Spouse-Name').disabled=true;
	document.getElementById('Address').disabled=true;
	document.getElementById('Delete-ECR').disabled=true;
	document.getElementById('Others').disabled=true;
}

function enable(){
	document.getElementById('Appearance').disabled=false;
	document.getElementById('Signature').disabled=false;
	document.getElementById('GivenName').disabled=false;
	document.getElementById('Surname').disabled=false;
	document.getElementById('Date-of-Birth').disabled=false;
	document.getElementById('Spouse-Name').disabled=false;
	document.getElementById('Address').disabled=false;
	document.getElementById('Delete-ECR').disabled=false;
	document.getElementById('Others').disabled=false;
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function checkIfContainsNumber(str){
	const number=/[`0123456789`]/;
	return number.test(str);
}
 function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
} 

function containsSomeSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?~]/
  return specialChars.test(str);
}

function checkIfContainsLetter(str){
	const string=/[`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`]/;
	return string.test(str);
}



