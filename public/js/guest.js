//$(function () {

  $(document).ready(function(){
    $('.slider').slider();
    });

  
  $("#register").on("click", function (event) {
    event.preventDefault();
    console.log("HERE");
    var newGuest = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
        };

    console.log(newGuest);

  

    













    // Send the PUT request.


    $.ajax("/api/guests/", {
      type: "POST",
      data: newGuest
    }).then(
      function (res) {
        console.log(res);
        //the below isn't console.logging
        console.log("added new guest: ", newGuest);
        // Reload the page to get the updated list
        location.reload();
      }
      );
    //clear form
    $("#first_name").val(""),
      $("#last_name").val(""),
      $("#email").val(""),
      $("#phone").val("")
      


    //send the POST request
    //  $.ajax("/api/hosts", {
    //    type: "POST",
    //    data: newHost

    //  }).then(function(){
    //    console.log("created new host++++++++========");

    //   location.reload();
    //   });       
  });



//});//end of iife














