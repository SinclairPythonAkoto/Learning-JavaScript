alert("Creating Real World Objects With JavaScript!");

var myMovie = {
     title: "The Social Network",
     releaseYear: "2010",
     duration: 2.0,
     actors: [
          {
               name: "Jessie Eisenberg",
               birthday: new Date("October 5, 1983"),
               hometown: "New York, New York"
          },
          {
               name: "Roonie Mara",
               birthday: new Date("April 17, 1985"),
               hometown: "Bedford New York"
          }
     ]
};

// accessing individual actors
document.write("Actor's names: <br>");
document.write( myMovie.actors[0].name + "<br>" );
document.write(myMovie.actors[1].name + "<br>" );

document.write("<br>");

// accessing invidual hometowns
document.write("Actor's hometown: <br>");
document.write( myMovie.actors[0].hometown + "<br>" );
document.write( myMovie.actors[1].hometown + "<br>" );
