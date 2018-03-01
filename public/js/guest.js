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
    // Function for creating a new list row for authors
    function createAuthorRow(authorData) {
      console.log(authorData);
      var newTr = $("<tr>");
      newTr.data("author", authorData);
      newTr.append("<td>" + authorData.name + "</td>");
      newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
      newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
      newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
      return newTr;
    }

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getAuthors() {
      $.get("/api/authors", function (data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createAuthorRow(data[i]));
        }
        renderAuthorList(rowsToAdd);
        nameInput.val("");
      });
    }

    // A function for rendering the list of authors to the page
    function renderAuthorList(rows) {
      authorList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        authorList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }




//open modal once data has been retrieved
    $('#modal1').modal('open');
    
    });

    
  });//end of document.ready
});//end of iife














