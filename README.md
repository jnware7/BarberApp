# BarberApp
Fullstack app to schedule barber appointments
# Challenge Rubric

Can build basic websites with HTML & CSS
Can add behavior to a website with JavaScript
Are familiar with SQL and relational databases like PostgreSQL
Are familiar with JavaScript promises
Are interested in building full-stack web applications with frameworks like Express
Are interested in learning CRUD (Create, Read, Update, Delete) relational database interactions
Are interested in server-side templating with tools like Pug or EJS#

# Description

You’ve been tasked with building a web app for a local barbershop to help them manage their scheduling.

Create a simple content management system that allows users to view, add, delete, and update appointments. Appointments entered in the system can be viewed in a list, as a single entry on its own page, or searched for using basic searches (by title, author, or genre).

To implement this system, you’ll need to use (among other things)…

- a web application framework (we recommend Express)
- a database (we recommend PostgreSQL)
- a tool for server-side HTML templating (we recommend Pug)

Don’t sweat the UI design too much. If you want to add some quick and easy styles so that it doesn’t look too terrible, use a library like Bootstrap or Pure.css.

Also, don’t spend too much time coming up with book data if you need some seed data to work with. Use a fake data generator like Faker or just borrow a list from a data store like this CSV.
 
 # Context
 
 Many of the seemingly fancy apps on the web have functionality that can be reduced to just 4 simple operations: Create, Read, Update, and Delete (or CRUD for short). At their core, they are really just ways to perform these operations on some resource
 
 - Writing a new tweet on Twitter? That’s a create operation.
- Searching for photos tagged with #kittenmittens on Instagram? That’s a read operation.
- Editing your profile information on LinkedIn? That’s an update operation.
- Removing that 2am rant-post from Facebook? That’s a delete operation.

Like the steel frame of a skyscraper, CRUD is the skeleton around which web applications are built: it’s not very sexy, but you have to know how to do it.

In this goal, you’ll be applying the CRUD pattern to the real-world system of
scheduling barber appointments.


# Specifications

 []- Appointments have a stylist,appointment time, approx time for services, and customer, style, and price.
 Users can...
 
  []- Add an appointment into the system via an admin page (create)
  []- See a list of appointments on the home page (read)
  []- Edit an appointments stylist and style.(edit)
  []- Delete an appointment.(delete)
  []- Search for avalible appointments by stylist OR style(read)
  []- View stylist details on stylist bio page.
  []-List of stlyist are always paginaged in groups of 3
  []-search results are presented in a new page.
  []-Appropriate HTTP verbs are used for CRUD actions
 []-GET requests are only used for read actions
 []-POST requests are only used for create actions
 []-PUT or PATCH requests are only used for update actions
 []-DELETE requests are only used for delete actions
 
 []-All views are rendered on the server using server-side templates written with react.
 []- Web server can be started with the command npm start
  []-Test suite can be run with the command npm test
  []-All code submissions are peer reviewed via GitHub PR by at least one other member of the team
  []-Master is always in a stable state (tests passing, site functions)
  []-The artifact produced is properly licensed, preferably with the MIT license.

# Stretch

  []-App is deployed and live on the web (consider using Heroku)
  []-All source code is written with ES6
  []-Users have their own account and can sign up and log in/out
  []-Users have one of three roles: admin, clerk, reader
    []-Users with role reader can only view and search for books
    []-Users with role clerk can edit books in addition to viewing/searching
    []-Users with role admin can perform all actions (create, read, update, delete) with books
  []-Styles have a price, cover image, stylist, approx time for style ,and stylist_id
