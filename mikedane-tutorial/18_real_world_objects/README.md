# Real World Objects #

In this section we will look at how objects can be used to create real world objects - like creating an itinerary of movies for a website like [IMDB](https://www.imdb.com).  This is a website that you can look up films to find information - actors, directors, year the film was made etc.

```
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
```

In this example, because the actors are stored in an arrya, we can access any of the actors by referring to the actor's array index:
```
myMovie.actors[0].name
```

Once we have access to the `actors` object attribute, we then have access to the objects within the array.  So to get the actors name, all we did was reference `.name` after we select which index of the array we wanted.
