//wrap in an iife in order to avoid polluting global scope
$(function () {

  $(document).ready(function(){
    $('.slider').slider();

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
 

  
  $("#register").on("click", function (event) {
    event.preventDefault();
    console.log("HERE");
    var newGuest = {
      event: $("#event").val(),
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
        };

    console.log(newGuest);

  
    // Send the POST request.


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
//When guestlist button on Lebanese card is clicked, calls to db, modal opens with info
  $("#guestlist_leb").on("click", function (event) {
    event.preventDefault();

    //ajax call to find all guests where event = lebanese


    // create functions for displaying data and add here
    getGuests();
    createGuestRow();
    

//open modal once data has been retrieved
    $('#modal1').modal('open');
    
    });

    // Function for creating a new table 
    //problem is here: getting all guest data
    function createGuestRow(guestData) {
      console.log(guestData);
      var newTr = $("<tr>");
      newTr.data("first_name", guestData);
      // newTr.append("<td>" + guestData.first_name + "</td>");
      return newTr;
    }

    // Function for retrieving guests and getting them ready to be rendered to the page
    function getGuests() {
      $.get("/api/guests", function (data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createGuestRow(data[i]));
        }
        renderGuestList(rowsToAdd);
        nameInput.val("");
      });
    }

    // A function for rendering the list of guests to the page
    function renderGuestList(rows) {
      $("tbody").children().not(":last").remove();
      $(".guest-container").children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        $("tbody").prepend(rows);
      }
      else {
        renderEmpty();
      }
    }



    
  });//end of document.ready
});//end of iife














