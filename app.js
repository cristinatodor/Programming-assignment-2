const express = require('express');
const app = express();
 
app.use(express.static('client'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var route_url = 'http://citypage-programming-assignment-2.7e14.starter-us-west-2.openshiftapps.com';

let aboutLocation = ["Geographically, it is roughly equidistant from Bucharest, Budapest and Belgrade. Located in the Somesul Mic River valley, the city is considered the unofficial capital to the historical province of Transylvania."];

app.get('/about-location', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
    resp.send(aboutLocation);
});

let aboutHistory = ["Cluj is an urban republic, a homeland for its inhabitants, a city where the organization of local administration, the proper distribution of taxes, the public order and urban development were, most of the time, more important than European events or princes’ politics."];

app.get('/about-history', function (req, resp) {
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(aboutHistory);
});

let aboutPopulation = ["From the Middle Ages onwards, the city of Cluj has been a multicultural city with a diverse cultural and religious life. The population is made up of ethnic Romanians(81.5%), Hungarians, Romani, Germans and Jews."]; 

app.get('/about-population', function (req, resp) {
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(aboutPopulation);
});

let aboutIndustry = ["An example of such initiative is Cluj IT Cluster. It envisions becoming one of the most credible suppliers from Central and Eastern Europe for innovative IT services and products as well as of organizational support systems, with the majority of its members able to be competitive on national and international markets."];
app.get('/about-industry', function (req, resp) {
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(aboutIndustry);
});


let seeTitles = [
	"St Michael's Church",
	"Cluj-Napoca Art Museum",
	"Botanical garden",
	"Central Park",
	"Lake Tarnita",
	"Moara de vant",
	"Piezisa Street",
	"Fortress Hill",
	"Hoia-Baciu Woods",
	"Banffy Castle"
]; 

let seeDescriptions = [
	"Cluj-Napoca's heavyweight sight is this stunning 15th-century Gothic church on Unirii Square.",
	"On the other side of Strada Iuliu Maniu, the Banffy Palace is a stately partner to St Michael's Church.",
	"A few minutes on foot from the Old Town is a 14-hectare botanical garden plotted in the 1920s.",
	"Now more than 190 years old, Cluj's main park was one of the first public spaces for recreation in Eastern Europe.",
	"An outdoor excursion of choice in summer for Cluj-Napoca residents, Lake Tarnita twists between tall hills that have a mantle of forest.",
	"A great petting zoo, especially for kids, as they can play with the animals and feed them.",
	"One third of Cluj's population is formed by students and their favourite place in the city is this road full of bars where you can have a drink for far less than in the city centre.",
	"For the best views of the city and the surrounding landscape, climb some 200 feet up this hill, whose name refers to an Austrian fortress built here in the 18-th century.",
	"A forested area ideal for nature walks and relaxation, this place has a reputation for intense paranormal activity and unexplained events.",
	"This architectural monument situated in Bontida is now home to one of the biggest Romanian festivals, Electric Castle."
];
 
let seeImages = [
	"images/gallery1.jpg",
	"images/see2.jpg",
	"images/see3c.jpg",
	"images/see4.jpg",
	"images/see5.jpg",
	"images/see6.jpg",
	"images/see7.jpg",
	"images/see8.jpg",
	"images/see9.jpg",
	"images/see10.jpg"
];
 
app.get('/list-see-titles', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
    resp.send(seeTitles);
});

app.get('/list-see-descriptions', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(seeDescriptions);
});

app.get('/list-see-images', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(seeImages);
});

let eatTitles = [
	"Euphoria Biergarten",
	"Colin's GastroPub",
	"Samsara Foodhouse",
	"Carrousel",
	"Via Restaurant",
	"Klausen Burger",
	"Casa Boema",
	"Toulouse Cafe-Brasserie",
	"Eggcetera",
	"Roata"
]; 

let eatDescriptions = [
	"One of the most popular terraces in the city during summer, this place offers a broad range of dishes influenced by international and Transylvanian cuisine. ",
	"With a small restaurant and a lovely terrace, Colin’s GastroPub is the place where homemade and local are the two words that best define their cuisine.",
	"A culinary paradise for vegetarians and vegans, Samsara FoodHouse offers only vegetarian and raw meals.",
	"A mix between Romanian, French and Italian cuisine, the restaurant uses mainly local produce for the meals. The location is ideal if you want to have a dinner with friends or just fancy a good glass of wine in the evening.",
	"Hidden in one of the pedestrian streets of Cluj and surrounded by the old walls of the medieval citadel, this restaurant has an exceptional location in a baroque palace.",
	"A great meal is always better when it comes with a beautiful view. Klausen Burger terrace has them both. If you are a gourmand, then this restaurant is made for you, as the portions are abundant.",
	"The garden is charming, the staff is wonderful and the location is just right - close to the city center, but away from all the traffic and noise.",
	"The atmosphere here just screams French. From the wood paneled walls, to the pictures and posters on the walls, from the fancy dishes, to the snobbish looking people you might come across, this place is French.",
	"The menu is mostly made up of different breakfast toasts, both sweet and savory, that seem designed for Instagram.",
	"This is one of the best places in Cluj to try authentic, homestyle Romanian dishes. The menu features soups, grilled meats and several Transylvanian specialties."
];
 
let eatImages = [
	"images/eat1.jpg",
	"images/eat2.jpg",
	"images/eat3.jpg",
	"images/eat4.jpg",
	"images/eat5.jpg",
	"images/eat6.jpg",
	"images/eat7.jpg",
	"images/eat8.jpg",
	"images/eat9.jpg",
	"images/eat10.jpg"
];
 
app.get('/list-eat-titles', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
    resp.send(eatTitles);
});

app.get('/list-eat-descriptions', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(eatDescriptions);
});

app.get('/list-eat-images', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(eatImages);
});

let events = [
	{"title": "Kitsch Party", "location": "FORM Space", "date": "10.05.2019", "text": "22:00 - 04:00", "count": "134"},
	{"title": "Street food festival", "location": "Museum Square", "date": "15.05.2019", "text": "17:00 - 22:00", "count": "101"},
	{"title": "Voleyball tournament", "location": "Polyvalent Hall", "date": "20.05.2019", "text": "12:00 - 16:00", "count": "59"},
	{"title": "Vintage clothes sale", "location": "Central Park", "date": "29.05.2019", "text": "12:00 - 17:00", "count": "308"},
	{"title": "Craft beer festival", "location": "Museum Square", "date": "01.06.2019", "text": "18:00 - 00:00", "count": "156"},
	{"title": "Jazz in the Park", "location": "Central Park", "date": "03.06.2019", "text": "10:00 - 00:00", "count": "342"},
	{"title": "Electro Swing Evening", "location": "Flying Circus", "date": "12.06.2019", "text": "21:00 - 4:00", "count": "45"},
	{"title": "Mioritmic Festival", "location": "Hoia Woods", "date": "15.06.2019", "text": "11:00 - 06:00", "count": "607"},
	{"title": "Tattoo Expo", "location": "Unirii Square", "date": "28.06.2019", "text": "13:00 - 16:00", "count": "180"}
];

app.get('/list-events', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(events);
});

app.post('/subscribe-event', function(req, resp) {
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	const event_no = parseInt(req.body.event_no); 
	const add_event_count = req.body.add_event_count; 
	
	events[event_no-1].count = add_event_count;
	resp.send("Subscribed to event");
});



let reviews = [
	{"title": "So cool", "author": "John", "date": "12.03.2019", "text": "One of the coolest places in Romania."},
	{"title": "Most beautiful city!", "author": "Dan", "date": "29.03.2019", "text": "I had such a great time in this amazing city. Will definitely visit it again!"},
	{"title": "A pleasant surprise..", "author": "Alex", "date": "30.03.2019", "text": "I must admit I wasn't expecting Cluj to be such an enjoyable place."},
	{"title": "Such a student city", "author": "Josh", "date": "01.04.2019", "text": "We absolutely loved the atmosphere young people bring to the city."},
	{"title": "Affordable", "author": "Will", "date": "04.04.2019", "text": "Very affordable compared to most European cities."},
	{"title": "Amazing nightlife", "author": "Richard", "date": "12.04.2019", "text": "Had such a great time here, some of the best nigths out of my life!"},
	{"title": "Worth seeing!", "author": "Kyle", "date": "18.04.2019", "text": "If you are planning on visiting Romania, Cluj is a must-see."}
];

app.get('/list-reviews', function (req, resp){
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	resp.send(reviews);
});

app.post('/add-review', function(req, resp) {
	resp.setHeader('Access-Control-Allow-Origin', route_url);
	const revTitle = req.body.add_review_title;
	const revAuthor = req.body.add_review_author;
	const revText = req.body.add_review_text;
		
	var curDay = function(){
		let today = new Date();
		var day = today.getDate();
		var month = today.getMonth()+1; 
		var year = today.getFullYear();

		if (day < 10) 
			day = '0' + day;
		if (month < 10) 
			month = '0' + month;
		return (day + '.' + month + '.' + year);
	};
	reviews.push({ title: revTitle, 
					author: revAuthor, 
					date: curDay(), 
					text: revText });

	resp.send("Added reviews");
});



module.exports = app;
