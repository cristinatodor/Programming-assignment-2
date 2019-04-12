document.addEventListener("DOMContentLoaded", function(event) {
	var base_url = 'http://citypage-programming-assignment-2.7e14.starter-us-west-2.openshiftapps.com';
	
	document.getElementById('get-see-do').addEventListener('click', async function(event){
		try {
			let responseTitles = await fetch(base_url + '/list-see-titles');
			let responseDescriptions = await fetch(base_url + '/list-see-descriptions');
			let responseImages = await fetch(base_url + '/list-see-images');
	
			if(!responseTitles.ok){
				throw new Error("Problem retrieving places " + responseTitles.code);
			}
			
			if(!responseDescriptions.ok){
				throw new Error("Problem retrieving places descriptions " + responseDescriptions.code);
			}
			
			if(!responseImages.ok){
				throw new Error("Problem retrieving images " + responseImages.code);
			}
	
			let bodyTitles = await responseTitles.text();
			let bodyDescriptions = await responseDescriptions.text();
			let bodyImages = await responseImages.text();
		
			let titles = JSON.parse(bodyTitles);	
			let descriptions = JSON.parse(bodyDescriptions);
			let images = JSON.parse(bodyImages);
		
			document.getElementById('get-see-do').style.visibility = "hidden";
			document.getElementById('hide-see-do').style.visibility = "visible";
			 
			for(let i = 0; i < titles.length; i++){
				var num = i+1;
				if (i%2 == 0) {
					let s = "<br><div class=\"row\">";
					s += "<div class=\"col-md-3 col-sm-4 news-img text-center\">" + "<a href=#see" + num.toString() + ">";
					s += "<img src=\"" + images[i] + "\" class=\"img-fluid\">" + "</a></div>";
					s += "<div class=\"col-md-9 col-sm-8 news-wthree-text text-left\">" + "<h4 class=\"mt-3\">" + titles[i] + "</h4>";
					s += "<p>" + descriptions[i] + "</p>" + "</div>";
					s += "</div>";
				
					document.getElementById('see-do-content').innerHTML += s;
				}
				else {
					let s = "<br><div class=\"row mt-lg-5 mt-md-4 mt-3\">";
					s += "<div class=\"col-md-9 col-sm-8 news-wthree-text text-right\">" + "<h4 class=\"mt-3\">" + titles[i] + "</h4>";
					s += "<p>" + descriptions[i] + "</p>" + "</div>";
					s += "<div class=\"col-md-3 col-sm-4 news-img text-center\">" + "<a href=#see" + num.toString() + ">";
					s += "<img src=\"" + images[i] + "\" class=\"img-fluid\">" + "</a></div>";
					s += "</div>";
				
					document.getElementById('see-do-content').innerHTML += s;
				}
			}
		}
		catch (error) {
			alert("Problem encountered 1: " + error);
		} 
		
	});
	
	document.getElementById('hide-see-do').addEventListener('click', async function(event){
		document.getElementById('get-see-do').style.visibility = "visible";
		document.getElementById('hide-see-do').style.visibility = "hidden";
		document.getElementById('see-do-content').innerHTML = "";
	});
	
	window.addEventListener("load", async function(event){
		try {
			let response = await fetch(base_url + '/about-location');
			
			if(!response.ok){
				throw new Error("Problem retrieving location details" + response.code);
			}
			
			let body = await response.text();
			let aboutLocation = JSON.parse(body);
		
			document.getElementById('about1-content').innerHTML = aboutLocation;
		}
		catch (error) {
			alert("Problem encountered 2: " + error);
		} 
	});
	
	window.addEventListener("load", async function(event){
		try {
			let response = await fetch(base_url + '/about-history');
			
			if(!response.ok){
				throw new Error("Problem retrieving history details" + response.code);
			}
			
			let body = await response.text();
			let aboutHistory = JSON.parse(body);
			
			document.getElementById('about2-content').innerHTML = aboutHistory;
		}
		catch (error) {
			alert("Problem encountered 3: " + error);
		}
	});
	
	window.addEventListener("load", async function(event){
		try {
			let response = await fetch(base_url + '/about-population');
			
			if(!response.ok){
				throw new Error("Problem retrieving population details" + response.code);
			}
			
			let body = await response.text();
			let aboutPopulation = JSON.parse(body);
			
			document.getElementById('about3-content').innerHTML = aboutPopulation;
		}
		catch (error) {
			alert("Problem encountered 4: " + error);
		}
	});
	
	window.addEventListener("load", async function(event){
		try {
			let response = await fetch(base_url + '/about-industry');
		
			if(!response.ok){
				throw new Error("Problem retrieving industry details" + response.code);
			}
			
			let body = await response.text();
			let aboutIndustry = JSON.parse(body);
		
			document.getElementById('about4-content').innerHTML = aboutIndustry;
		}
		catch (error) {
			alert("Problem encountered 5: " + error);
		}
	});
	
	function writeEvents(events) {
		let len = events.length; 
		
		document.getElementById('event-title1').innerHTML = events[len-1].title;
		document.getElementById('event-location1').innerHTML = "Location: " + events[len-1].location;
		document.getElementById('event-date1').innerHTML = events[len-1].date;
		document.getElementById('event-text1').innerHTML = events[len-1].text;
		
		document.getElementById('event-title2').innerHTML = events[len-2].title;
		document.getElementById('event-location2').innerHTML = "Location: " + events[len-2].location;
		document.getElementById('event-date2').innerHTML = events[len-2].date;
		document.getElementById('event-text2').innerHTML = events[len-2].text;
		
		document.getElementById('event-title3').innerHTML = events[len-3].title;
		document.getElementById('event-location3').innerHTML = "Location: " + events[len-3].location;
		document.getElementById('event-date3').innerHTML = events[len-3].date;
		document.getElementById('event-text3').innerHTML = events[len-3].text;	
		
		document.getElementById('event-title4').innerHTML = events[len-4].title;
		document.getElementById('event-location4').innerHTML = "Location: " + events[len-4].location;
		document.getElementById('event-date4').innerHTML = events[len-4].date;
		document.getElementById('event-text4').innerHTML = events[len-4].text;
			
		document.getElementById('event-title5').innerHTML = events[len-5].title;
		document.getElementById('event-location5').innerHTML = "Location: " + events[len-5].location;
		document.getElementById('event-date5').innerHTML = events[len-5].date;
		document.getElementById('event-text5').innerHTML = events[len-5].text;
			
		document.getElementById('event-title6').innerHTML = events[len-6].title;
		document.getElementById('event-location6').innerHTML = "Location: " + events[len-6].location;
		document.getElementById('event-date6').innerHTML = events[len-6].date;
		document.getElementById('event-text6').innerHTML = events[len-6].text;
			
		document.getElementById('event-title7').innerHTML = events[len-7].title;
		document.getElementById('event-location7').innerHTML = "Location: " + events[len-7].location;
		document.getElementById('event-date7').innerHTML = events[len-7].date;
		document.getElementById('event-text7').innerHTML = events[len-7].text;
			
		document.getElementById('event-title8').innerHTML = events[len-8].title;
		document.getElementById('event-location8').innerHTML = "Location: " + events[len-8].location;
		document.getElementById('event-date8').innerHTML = events[len-8].date;
		document.getElementById('event-text8').innerHTML = events[len-8].text;
			
		document.getElementById('event-title9').innerHTML = events[len-9].title;
		document.getElementById('event-location9').innerHTML = "Location: " + events[len-9].location;
		document.getElementById('event-date9').innerHTML = events[len-9].date;
		document.getElementById('event-text9').innerHTML = events[len-9].text;
	};
	
	window.addEventListener("load", async function(event){
		try {
			let response = await fetch(base_url + '/list-events');
			
			if(!response.ok){
				throw new Error("Problem retrieving events" + response.code);
			}
			
			let body = await response.text();
			let events = JSON.parse(body);
			
			writeEvents(events);
		}
		catch (error) {
			alert("Problem encountered 6: " + error);
		}
	});
	
	function writeReviews(reviews) {
		let len = reviews.length; 
			
		document.getElementById('review-title1').innerHTML = reviews[len-1].title;
		document.getElementById('review-author1').innerHTML = "Posted by " + reviews[len-1].author;
		document.getElementById('review-date1').innerHTML = reviews[len-1].date;
		document.getElementById('review-text1').innerHTML = reviews[len-1].text;
			
		document.getElementById('review-title2').innerHTML = reviews[len-2].title;
		document.getElementById('review-author2').innerHTML = "Posted by " + reviews[len-2].author;
		document.getElementById('review-date2').innerHTML = reviews[len-2].date;
		document.getElementById('review-text2').innerHTML = reviews[len-2].text;
			
		document.getElementById('review-title3').innerHTML = reviews[len-3].title;
		document.getElementById('review-author3').innerHTML = "Posted by " + reviews[len-3].author;
		document.getElementById('review-date3').innerHTML = reviews[len-3].date;
		document.getElementById('review-text3').innerHTML = reviews[len-3].text;
			
		document.getElementById('review-title4').innerHTML = reviews[len-4].title;
		document.getElementById('review-author4').innerHTML = "Posted by " + reviews[len-4].author;
		document.getElementById('review-date4').innerHTML = reviews[len-4].date;
		document.getElementById('review-text4').innerHTML = reviews[len-4].text;
			
		document.getElementById('review-title5').innerHTML = reviews[len-5].title;
		document.getElementById('review-author5').innerHTML = "Posted by " + reviews[len-5].author;
		document.getElementById('review-date5').innerHTML = reviews[len-5].date;
		document.getElementById('review-text5').innerHTML = reviews[len-5];
		
		document.getElementById('review-title6').innerHTML = reviews[len-6].title;
		document.getElementById('review-author6').innerHTML = "Posted by " + reviews[len-6].author;
		document.getElementById('review-date6').innerHTML = reviews[len-6].date;
		document.getElementById('review-text6').innerHTML = reviews[len-6].text;
	};
	window.addEventListener("load", async function(event){
		try {
			let response = await fetch(base_url + '/list-reviews');
			
			if(!response.ok){
				throw new Error("Problem retrieving reviews" + response.code);
			}
			
			let body = await response.text();
			let reviews = JSON.parse(body);
			
			writeReviews(reviews);
		}
		catch (error) {
			alert("Problem encountered 7: " + error);
		}
	});
	
	document.getElementById('get-eat').addEventListener('click', async function(event){
		try {
			let responseTitles = await fetch(base_url + '/list-eat-titles');
			let responseDescriptions = await fetch(base_url + '/list-eat-descriptions');
			let responseImages = await fetch(base_url + '/list-eat-images');
	
			if(!responseTitles.ok){
				throw new Error("Problem retrieving places " + responseTitles.code);
			}
			
			if(!responseDescriptions.ok){
				throw new Error("Problem retrieving places descriptions " + responseDescriptions.code);
			}
			
			if(!responseImages.ok){
				throw new Error("Problem retrieving images " + responseImages.code);
			}
	
			let bodyTitles = await responseTitles.text();
			let bodyDescriptions = await responseDescriptions.text();
			let bodyImages = await responseImages.text();
		
			let titles = JSON.parse(bodyTitles);	
			let descriptions = JSON.parse(bodyDescriptions);
			let images = JSON.parse(bodyImages);
		
			document.getElementById('get-eat').style.visibility = "hidden";
			document.getElementById('hide-eat').style.visibility = "visible";
			 
			for(let i = 0; i < titles.length; i++){
				var num = i+1;
				if (i%2 == 0) {
					let s = "<br><div class=\"row\">";
					s += "<div class=\"col-md-3 col-sm-4 news-img text-center\">" + "<a href=#eat" + num.toString() + ">";
					s += "<img src=\"" + images[i] + "\" class=\"img-fluid\">" + "</a></div>";
					s += "<div class=\"col-md-9 col-sm-8 news-wthree-text text-left\">" + "<h4 class=\"mt-3\">" + titles[i] + "</h4>";
					s += "<p>" + descriptions[i] + "</p>" + "</div>";
					s += "</div>";
				
					document.getElementById('eat-content').innerHTML += s;
				}
				else {
					let s = "<br><div class=\"row mt-lg-5 mt-md-4 mt-3\">";
					s += "<div class=\"col-md-9 col-sm-8 news-wthree-text text-right\">" + "<h4 class=\"mt-3\">" + titles[i] + "</h4>";
					s += "<p>" + descriptions[i] + "</p>" + "</div>";
					s += "<div class=\"col-md-3 col-sm-4 news-img text-center\">" + "<a href=#eat" + num.toString() + ">";
					s += "<img src=\"" + images[i] + "\" class=\"img-fluid\">" + "</a></div>";
					s += "</div>";
				
					document.getElementById('eat-content').innerHTML += s;
				}
			}
		}
		catch (error) {
			alert("Problem encountered 8: " + error);
		} 
	});
	
	document.getElementById('hide-eat').addEventListener('click', async function(event){
		document.getElementById('get-eat').style.visibility = "visible";
		document.getElementById('hide-eat').style.visibility = "hidden";
		document.getElementById('eat-content').innerHTML = "";
	});
	
	document.getElementById('form-add-review').addEventListener('submit', async function(event) {
		event.preventDefault();
		alert("ooooo");
		
		try {
			let add_review_title = document.getElementById('add_review_title').value;
			let add_review_author = document.getElementById('add_review_author').value;
			let add_review_text = document.getElementById('add_review_text').value;
			
			let response = await fetch(base_url + '/add-review', 
											{
												method: "POST",
												headers: {
													"Content-Type": "application/x-www-form-urlencoded"
												}, 
												body: "add_review_title=" + add_review_title + "&add_review_author=" + add_review_author + "&add_review_text=" + add_review_text,
											});
			if (!response.ok){
				throw new Error("Problem adding review text" + response.code);
			}
			
			response = await fetch(base_url + '/list-reviews');
			
			if(!response.ok){
				throw new Error("Problem retrieving reviews" + response.code);
			}
			
			let body = await response.text();
			let reviews = JSON.parse(body);
			
			writeReviews(reviews);

		}
		catch (error) {
			alert("Problem encountered 9: " + error.message);
		}
		
	});

	
});


