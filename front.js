function validate()
{
  var name=document.myform.name.value;
var password=document.myform.password.value;
var secondpassword=document.myform.repassword.value;
var x=document.myform.email.value;
var atposition=x.indexOf("@");
var dotposition=x.lastIndexOf(".");
var contact=document.myform.contact.value;
var a = document.form.add.value;

if(!/^[A-Za-z ]+$/.test(name))
  {
  alert("Please enter characters only in the name field!");
  return false;
}

if(password.length<8)
{
alert("Password must be at least 8 characters long.");
return false;
}

if(password!=secondpassword)
{
  alert("Password must be same!");
  return false;
}
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
return false;
}
if(!/^(9|8|7)\d{9}$/.test(contact))
{
  alert("please enter correct phone number");
}

if(a=="")
{
alert("Please Enter Your Details Here");
return false;
}

}



// var myWindow = window.open("", "", "width=200,height=100");
// function display(){
// DispWin = window.open()
//  message = "<ul><li><b>NAME: </b>" + document.myform.name.value;
//  message += "<li><b>ADDRESS: </b>" + document.myform.add.value;
//  message += "<li><b>PHONE: </b>" + document.myform.contact.value + "</ul>";
//  DispWin.document.write(message);
// }
// function display()
// {
// var n1=document.myform.name.value;
// alert("n1");
// }
