//function to the get the json elements to be accessed 
function getFile(url) {
  "use strict";
  var jsFile = new XMLHttpRequest();
  jsFile.open("GET", url, false);
  jsFile.send(null);
  return jsFile.responseText;
}


var idNum;

// function called when the page is load and to get and parse to json doc to extract the information required
function onLoad() {
  
  // open a div to encapsulate the content extracted from the doc
  var postDiv = "<div>";
  
  // get the json doc
  var xmlDoc = getFile("https://jsonplaceholder.typicode.com/posts");
  // and parse to be accessible
  var jsonDoc = JSON.parse(xmlDoc);
  
  
  // loop to iterate through the doc items and create tags dynamically for the html
  for (i in jsonDoc) {
    
    //Empty varibles for title, body, userID, post number, also used to clear previous values taken insede of the loop
    var postTitle = "";
    var postBody = "";
    var user = "";
    idNum = "";
    
    idNum += jsonDoc[i].id;
    
    
    user += "<p id='userPost'> Posted by UserID " + jsonDoc[i].userId + "</p>";
    
    
    postBody += "<p id='postBody'>" + jsonDoc[i].body.charAt(0).toUpperCase() + jsonDoc[i].body.slice(1) + "</p>";
    
    // Tried to create the an achor tag for the title to open a new tab and display the post content - Not working!
    postTitle += "<h3>" +"<a href='#' onclick='openNewPage()'>" + jsonDoc[i].title.toUpperCase() + "</a>" + "</h3>";
    
    // Tried to create a button for each post (ul) for when pressed to open a modal box - Not working! 
    postDiv += "<ul>" + "<button id='"+idNum+" onclick=()'>" + postTitle + postBody + user + "</button>" + "</ul>";
    
    // send contents dynamically to index.page under the results place holder
    document.getElementById("results").innerHTML = postDiv + "</div>";
    
  }   
}

// Fuction to open a new tab - It open but it is not working as I wanted.
// I created a Array of Arrays to push the post contents but and did a loop here previouly but it was only oppening 100 tabs - Needs adjustment.

function openNewPage() {
   window.open("posts.aspx?id="+idNum, "_blank");
}
