NB: I have merged all my features into the development branch.


#TO DO:

##UI
Add upcoming event card(s). (Think we will need several with dummy data in database)	
Add guest sign up button.
Add modal form for guests to complete.		
Add confirmation for guest. (generic modal/page, or specific to each guest?)
Add alternate card to display when event is full/closed.

##JavaScript/jQuery
Link guest sign up button to trigger modal form.
Link submit button on modal to send data to db
Make AJAX calls for PUT routes (display/update max number of guests per event; add search function for events/guests for demonstration purposes)
If event fills up, change event card display.
Put all of the above in an IIFY in js file under public.

##Routes
Work through all possible routes needed, for example:
Show all events
Show events by date or host or guest
Show all guests for an event
Show all events by charity
Create new guest
[optional: create new event]
Delete guest for cancellations
Show guests by event
(All of these functions should not be available for public view, but for our project, perhaps we need to include them so that the database actually has to post some data; otherwise it is just a page. Or we could make an admin or host view page and have these functions go there? The ability to search for guests/hosts or to print off a guest list, etc.)

##Sequelize
Create models  for all the tables (events complete; add guests and hosts and donors?)

##Test
Choose a feature to write a test for
Write a unit test

##Deploy to Heroku
	
