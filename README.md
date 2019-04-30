# Programming term 2 assignment

## Web application for a city 
The website can be either run on the local machine of the user or can be accessed using the cloud hosting service.  

For running the website on a the local machine, start the server by typing the "npm start server.js" on the command prompt and then access http://127.0.0.1:8080. 

Here is the link for the cloud hosted web app: 
http://citypage-programming-assignment-2.7e14.starter-us-west-2.openshiftapps.com/

The website offers information about the city, allowing people to subcribe to events and add reviews. The site has several sections, each of them using GET/POST requests. 

The weather box in the right corner of the page shows the current weather in the city, using an external webservice provided by [Weatherbit](https://www.weatherbit.io/api).

Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
{"data": [<br>
&nbsp;&nbsp; { "wind_cdir": "ENE", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "rh": 76, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "pod": "d", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "pres": 959.5, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "timezone": "Europe/Bucharest", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "ob_time": "2019-04-30 08:00", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "country_code": "RO", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "clouds": 25, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "ts": 1556611200, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "solar_rad": 730.9, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "state_code": "13", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "lat": 46.76667, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "wind_spd": 2.1, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "wind_cdir_full": "east-northeast", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "slp": 1008, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "vis": 10, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "lon": 23.6, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "uv": 6.36198, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "datetime": "2019-04-30:08", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "h_angle": -25.7, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "dewpt": 8.9, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "aqi": 41, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "dhi": 109.99, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "wind_dir": 70, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "elev_angle": 46.53, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "ghi": 736.14, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "precip": null, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "sunrise": "03:10", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "city_name": "Cluj-Napoca", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "weather": { <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "icon": "c02d", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "code": "801", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "description": "Few clouds" <br>
&nbsp;&nbsp;&nbsp;&nbsp; }, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "sunset": "17:33", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "temp": 13, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "dni": 872.24, <br>
&nbsp;&nbsp;&nbsp;&nbsp; "station": "LRCL", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "app_temp": 13 <br>
&nbsp;&nbsp;} <br>
&nbsp;&nbsp;], <br>
"count": 1 <br>
} <br>

About section offers information about the location, history, population and industry. Each of these has a Read More button, that uses a request to retrieve more information. 

* /about-location <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[ <br>
"Geographically, it is roughly equidistant from Bucharest, Budapest and Belgrade. Located in the Somesul Mic River valley, the city is considered the unofficial capital to the historical province of Transylvania." <br>
]
* /about-history <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[ <br>
"Cluj is an urban republic, a homeland for its inhabitants, a city where the organization of local administration, the proper distribution of taxes, the public order and urban development were, most of the time, more important than European events or princes’ politics." <br>
]
* /about-population  <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br> 
[ <br>
"From the Middle Ages onwards, the city of Cluj has been a multicultural city with a diverse cultural and religious life. The population is made up of ethnic Romanians(81.5%), Hungarians, Romani, Germans and Jews." <br>
]
* /about-industry  <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[ <br>
"An example of such initiative is Cluj IT Cluster. It envisions becoming one of the most credible suppliers from Central and Eastern Europe for innovative IT services and products as well as of organizational support systems, with the majority of its members able to be competitive on national and international markets." <br>
]

Places section is divided into 2 parts, See & Do and Eat. Each of these has a Show More button, that uses a request to retrieve those places. 

See & Do: <br>
* /list-see-titles <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[ 
<br> "St Michael's Church",
<br> "Cluj-Napoca Art Museum",
<br> "Botanical garden",
<br> "Central Park",
<br> "Lake Tarnita",
<br> "Moara de vant",
<br> "Piezisa Street",
<br> "Fortress Hill",
<br> "Hoia-Baciu Woods",
<br> "Banffy Castle"
<br> ]

* /list-see-descriptions <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[
<br> "Cluj-Napoca's heavyweight sight is this stunning 15th-century Gothic church on Unirii Square.",
<br> "On the other side of Strada Iuliu Maniu, the Banffy Palace is a stately partner to St Michael's Church.",
<br> "A few minutes on foot from the Old Town is a 14-hectare botanical garden plotted in the 1920s.",
<br> "Now more than 190 years old, Cluj's main park was one of the first public spaces for recreation in Eastern Europe.",
<br> "An outdoor excursion of choice in summer for Cluj-Napoca residents, Lake Tarnita twists between tall hills that have a mantle of forest.",
<br> "A great petting zoo, especially for kids, as they can play with the animals and feed them.",
<br> "One third of Cluj's population is formed by students and their favourite place in the city is this road full of bars where you can have a drink for far less than in the city centre.",
<br> "For the best views of the city and the surrounding landscape, climb some 200 feet up this hill, whose name refers to an Austrian fortress built here in the 18-th century.",
<br> "A forested area ideal for nature walks and relaxation, this place has a reputation for intense paranormal activity and unexplained events.",
<br> "This architectural monument situated in Bontida is now home to one of the biggest Romanian festivals, Electric Castle."
<br> ]

* /list-see-images <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[
<br>"images/gallery1.jpg",
<br>"images/see2.jpg",
<br>"images/see3c.jpg",
<br>"images/see4.jpg",
<br>"images/see5.jpg",
<br>"images/see6.jpg",
<br>"images/see7.jpg",
<br>"images/see8.jpg",
<br>"images/see9.jpg",
<br>"images/see10.jpg"
]

Eat: <br>
* /list-eat-titles <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[
<br> "Euphoria Biergarten",
<br> "Colin's GastroPub",
<br> "Samsara Foodhouse",
<br> "Carrousel",
<br> "Via Restaurant",
<br> "Klausen Burger",
<br> "Casa Boema",
<br> "Toulouse Cafe-Brasserie",
<br> "Eggcetera",
<br> "Roata"
<br> ]

* /list-eat-descriptions <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[
<br> "One of the most popular terraces in the city during summer, this place offers a broad range of dishes influenced by international and Transylvanian cuisine. ",
<br> "With a small restaurant and a lovely terrace, Colin’s GastroPub is the place where homemade and local are the two words that best define their cuisine.",
<br> "A culinary paradise for vegetarians and vegans, Samsara FoodHouse offers only vegetarian and raw meals.",
<br> "A mix between Romanian, French and Italian cuisine, the restaurant uses mainly local produce for the meals. The location is ideal if you want to have a dinner with friends or just fancy a good glass of wine in the evening.",
<br> "Hidden in one of the pedestrian streets of Cluj and surrounded by the old walls of the medieval citadel, this restaurant has an exceptional location in a baroque palace.",
<br> "A great meal is always better when it comes with a beautiful view. Klausen Burger terrace has them both. If you are a gourmand, then this restaurant is made for you, as the portions are abundant.",
<br> "The garden is charming, the staff is wonderful and the location is just right - close to the city center, but away from all the traffic and noise.",
<br> "The atmosphere here just screams French. From the wood paneled walls, to the pictures and posters on the walls, from the fancy dishes, to the snobbish looking people you might come across, this place is French.",
<br> "The menu is mostly made up of different breakfast toasts, both sweet and savory, that seem designed for Instagram.",
<br> "This is one of the best places in Cluj to try authentic, homestyle Romanian dishes. The menu features soups, grilled meats and several Transylvanian specialties."
<br> ]

* /list-eat-images <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[
<br> "images/eat1.jpg",
<br> "images/eat2.jpg",
<br> "images/eat3.jpg",
<br> "images/eat4.jpg",
<br> "images/eat5.jpg",
<br> "images/eat6.jpg",
<br> "images/eat7.jpg",
<br> "images/eat8.jpg",
<br> "images/eat9.jpg",
<br> "images/eat10.jpg"
<br> ]

Events section provides the possiblity of subscribing to one of the nine events listed, by entering the email address. 
* /list-events <br>
Request type: GET 

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[ <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 1", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 1", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "10.05.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 1", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "134" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 2", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 2", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "15.05.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 2", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "101" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 3", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 3", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "20.05.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 3", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "59" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 4", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 4", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "29.05.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 4", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "38" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 5", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 5", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "01.06.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 5", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "156" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 6", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 6", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "03.06.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 6", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "342" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 7", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 7", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "12.06.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 7", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "45" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 8", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 8", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "15.06.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 8", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "67" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Event 9", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "location": "Location 9", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "28.06.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "here is the event 9", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "count": "180" <br>
&nbsp;&nbsp; } <br>
] <br>
 
 * /subscribe-event <br>

The footer of the page, labeled Get involved, allows the user to send a review to the website, which will be then posted in the Reviews section. 
* /list-reviews <br>
Request type: GET

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

Response code | Description 
------------------ | -----------
200 | Successful response
400 | Bad request 

Response content/example <br>
[ <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "So cool", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "John", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "12.03.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "One of the coolest places in Romania." <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Most beautiful city!", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "Dan", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "29.03.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "I had such a great time in this amazing city. Will definitely visit it again!" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "A pleasant surprise..", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "Alex", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "30.03.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "I must admit I wasn't expecting Cluj to be such an enjoyable place." <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Such a student city", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "Josh", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "01.04.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "We absolutely loved the atmosphere young people bring to the city." <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Affordable", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "Will", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "04.04.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "Very affordable compared to most European cities." <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Amazing nightlife", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "Richard", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "12.04.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "Had such a great time here, some of the best nigths out of my life!" <br>
&nbsp;&nbsp; }, <br>
&nbsp;&nbsp; { <br>
&nbsp;&nbsp;&nbsp;&nbsp; "title": "Worth seeing!", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "author": "Kyle", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "date": "18.04.2019", <br>
&nbsp;&nbsp;&nbsp;&nbsp; "text": "If you are planning on visiting Romania, Cluj is a must-see." <br>
&nbsp;&nbsp; } <br>
] <br>

* /add-review <br>


