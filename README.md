#API Basejump: Image Search Abstraction Layer

>User stories:  
>I can get the image URLs, alt text and page urls for a set of images relating to a given search string.  
>I can paginate through the responses by adding a ?offset=2 parameter to the URL.  
>I can get a list of the most recently submitted search strings.

###Example searches:

https://search22.herokuapp.com/search/cats  
https://search22.herokuapp.com/search/cats?offset=2

###Search output:
```
[
 {
  "image":"https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg",
  "text":"A cat that is playing with a",
  "page":"https://en.wikipedia.org/wiki/Cat"
 },...
]
```

###Example latest:

https://search22.herokuapp.com/latest

###Latest output:
```
["kitties","kittens","cats", ...]
```
