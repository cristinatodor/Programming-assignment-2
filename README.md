# Programming term 2 assignment

## Web application for a city 

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
* /about-history 
* /about-population
* /about-industry

By clicking on the Read More and Show More buttons in the About and Places sections, repectively, the user can get more information about those sections. 
The Events section provides the possiblity of subcribing to one of the nine events listed, by entering the email address.
The footer of the page, labeled Get involved, allows the user to send a review to the website, which will be then posted in the Reviews section. 

Here is the link for the cloud hosted app: 
http://citypage-programming-assignment-2.7e14.starter-us-west-2.openshiftapps.com/
