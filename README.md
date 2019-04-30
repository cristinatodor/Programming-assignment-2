# Programming term 2 assignment

## Web application for a city 

The website offers information about the city, allowing people to subcribe to events and add reviews. 

The weather box in the right corner of the page shows the current weather in the city, using an external webservice provided by [Weatherbit](https://www.weatherbit.io/api).

Request parameters | Description 
------------------ | -----------
This operation has no parameters | 

  
Response code | Description 
------------------ | -----------
200 | Successful response
400 | add text  

Response content/example <br>
{
  "data": [<br>
{
"wind_cdir": "ENE",
"rh": 76,
"pod": "d",
"pres": 959.5,
"timezone": "Europe/Bucharest",
"ob_time": "2019-04-30 08:00",
"country_code": "RO",
"clouds": 25,
"ts": 1556611200,
"solar_rad": 730.9,
"state_code": "13",
"lat": 46.76667,
"wind_spd": 2.1,
"wind_cdir_full": "east-northeast",
"slp": 1008,
"vis": 10,
"lon": 23.6,
"uv": 6.36198,
"datetime": "2019-04-30:08",
"h_angle": -25.7,
"dewpt": 8.9,
"aqi": 41,
"dhi": 109.99,
"wind_dir": 70,
"elev_angle": 46.53,
"ghi": 736.14,
"precip": null,
"sunrise": "03:10",
"city_name": "Cluj-Napoca",
"weather": {
"icon": "c02d",
"code": "801",
"description": "Few clouds"
},
"sunset": "17:33",
"temp": 13,
"dni": 872.24,
"station": "LRCL",
"app_temp": 13
}
],
"count": 1
} 



By clicking on the Read More and Show More buttons in the About and Places sections, repectively, the user can get more information about those sections. 
The Events section provides the possiblity of subcribing to one of the nine events listed, by entering the email address.
The footer of the page, labeled Get involved, allows the user to send a review to the website, which will be then posted in the Reviews section. 

Here is the link for the cloud hosted app: 
http://citypage-programming-assignment-2.7e14.starter-us-west-2.openshiftapps.com/
