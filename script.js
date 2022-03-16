


$(document).ready(function () {
    // Validate fname
        $('#val1').hide();   
        let fnamesError = true;
        $('#fname').keyup(function () {
            validateFname();
        });
         
        function validateFname() {
          let FnameValue = $('#fname').val();
          if (FnameValue.length == '') {
          $('#val1').show();
          fnamesError = false;
              return false;
          }
       
          else {
              $('#val1').hide();
          }
        }
     //valdet last name
     $('#val2').hide();   
     let lnamesError = true;
     $('#lname').keyup(function () {
         validateLname();
     });
      
     function validateLname() {
       let LnameValue = $('#lname').val();
       if (LnameValue.length == '') {
       $('#val2').show();
       lnamesError = false;
           return false;
       }
    
       else {
           $('#val2').hide();
       }
     }
        //valdet address 1
        $('#adr').hide();   
        let addressError = true;
        $('#ad1').keyup(function () {
            validateAddress();
        });
         
        function validateAddress() {
          let AddressValue = $('#ad1').val();
          if (AddressValue.length == '') {
          $('#adr').show();
          addressError = false;
              return false;
          }
       
          else {
              $('#adr').hide();
          }
        }
       //valdet city
       $('#cit').hide();   
       let cityError = true;
       $('#city').keyup(function () {
           validateCity();
       });
        
       function validateCity() {
         let cityValue = $('#city ').val();
         if (cityValue.length == '') {
         $('#cit').show();
         cityError = false;
             return false;
         }
      
         else {
             $('#cit').hide();
         }
       }
            //valdet sp
       $('#sp').hide();   
       let StateErrors = true;
       $('#State').keyup(function () {
        validateState();
       });
        
       function validateState() {
         let StateValue = $('#State ').val();
         if (StateValue.length == '') {
         $('#sp').show();
         cityError = false;
             return false;
         }
      
         else {
             $('#sp').hide();
         }
       }
       

        //valdet sp
        $('#co').hide();   
        let CountryErrors = true;
        $('#Country').keyup(function () {
            validateCountry();
        });
         
        function validateCountry() {
          let CountryValue = $('#Country ').val();
          if (CountryValue.length == '') {
          $('#co').show();
          CountryError = false;
              return false;
          }
       
          else {
              $('#co').hide();
          }
        }
   
      
  // Submit button
  $('#submit').click(function () {
    validateFname();
    validateLname();
    validateAddress();
    validateCity();
    validateState();
    validateCountry();
    if (( fnamesError == true) &&
    (addressError == true)&&
        (lnamesError == true) &&
        (cityError == true) &&
        (StateErrors==true)&&
        (CountryErrors==true ))
      
       {
        return true;
      
    } else {
      
        return false;
        
    }


  });
  });


  
 
   

  var submit= document.getElementById("submit");
  submit.addEventListener ("click", displayDetails);
  var row = 1;
  
function displayDetails() {
var fname = document.getElementById ("fname").value;
var midname = document.getElementById ("midname").value;
var lname = document.getElementById ("lname").value;
var gender= document.getElementById ("sel1").value;
var det= document.getElementById ("det").value;
var address1= document.getElementById ("ad1").value;
var address2= document.getElementById ("ad2").value;
var city= document.getElementById ("city").value;
var State= document.getElementById ("State").value;
var Country= document.getElementById ("Country").value;
var hobbies =document.getElementById ("hob").value;

if(!fname || !lname  ||!city ||!State ||!Country 
    || !address1) {
alert("Please fill all the boxes");
return;

}

var display = document.getElementById ("display");
var newRow= display.insertRow(row);

var cell1= newRow.insertCell(0);
var cell2= newRow.insertCell(1);
var cell3= newRow.insertCell(2);
var cell4= newRow.insertCell(3);
var cell5= newRow.insertCell(4);
var cell6= newRow.insertCell(5);
var cell7= newRow.insertCell(6);
var cell8= newRow.insertCell(7);
var cell9= newRow.insertCell(8);
var cell10= newRow.insertCell(9);
var cell11= newRow.insertCell(10);

cell1.innerHTML= fname;
cell2.innerHTML= midname;
cell3.innerHTML= lname;
cell4.innerHTML= gender;
cell5.innerHTML= det;
cell6.innerHTML= address1;
cell7.innerHTML= address2;
cell8.innerHTML= city;
cell9.innerHTML= State;
cell10.innerHTML= Country;
cell11.innerHTML= hobbies;

}