$(function(){

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $('.timepicker').pickatime({
    default : 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

  $("#submit").on("click", function(event){
    event.preventDefault();
      
    var newHost = {
    firstname: $("#first_name").val(),
        lastname:$("#last_name").val(),
        cuisine:$("#cuisine").val(),
        email:$("#email").val(),
        address:$("#address").val(),
        date:$("#date").val(),
        peoplecount:$("#peoplecount").val()
       };

       console.log(newHost);
    
       // Send the PUT request.
      
      
     $.ajax("/api/hosts/", {
      type: "PUT",
      data: newHost
    }).then(
      function (res) {
        console.log(res);
        //the below isn't console.logging
        console.log("added new host to host: ", hostData);
        // Reload the page to get the updated list
        location.reload();
      }
      );
//clear form
       $("#first_name").val(""),
        $("#last_name").val(""),
        $("#cuisine").val(""),
        $("#email").val(""),
        $("#address").val(""),
        $("#date").val(""),
        $("#peoplecount").val("")


 //send the POST request
 $.ajax("/api/hosts", {
   type: "POST",
   data: newHost

 }).then(function(){
   console.log("created new host++++++++========");
    
  location.reload();
  });       
  });

 

});//end of iife














