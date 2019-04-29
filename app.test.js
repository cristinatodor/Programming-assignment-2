'use strict';

const app = require('./app');
const request = require('supertest');

function serialise(obj){
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

describe('Test the city page', () => {
	test('GET /about-location succeeds', () => {
		return request(app)
			.get('/about-location')
			.expect(200);
	});

	test('GET /about-location returns JSON', () => {
		return request(app)
			.get('/about-location')
			.expect('Content-type', /json/);
	});
	
	test('GET /about-history succeeds', () => {
		return request(app)
			.get('/about-history')
			.expect(200);
	});

	test('GET /about-history returns JSON', () => {
		return request(app)
			.get('/about-history')
			.expect('Content-type', /json/);
	});
	
	test('GET /about-population succeeds', () => {
		return request(app)
			.get('/about-population')
			.expect(200);
	});

	test('GET /about-population returns JSON', () => {
		return request(app)
			.get('/about-population')
			.expect('Content-type', /json/);
	});
	
	test('GET /about-industry succeeds', () => {
		return request(app)
			.get('/about-industry')
			.expect(200);
	});

	test('GET /about-industry returns JSON', () => {
		return request(app)
			.get('/about-industry')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-see-titles succeeds', () => {
		return request(app)
			.get('/list-see-titles')
			.expect(200);
	});

	test('GET /list-see-titles returns JSON', () => {
		return request(app)
			.get('/list-see-titles')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-see-descriptions succeeds', () => {
		return request(app)
			.get('/list-see-descriptions')
			.expect(200);
	});

	test('GET /list-see-descriptions returns JSON', () => {
		return request(app)
			.get('/list-see-descriptions')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-see-images succeeds', () => {
		return request(app)
			.get('/list-see-descriptions')
			.expect(200);
	});

	test('GET /list-see-images returns JSON', () => {
		return request(app)
			.get('/list-see-descriptions')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-eat-titles succeeds', () => {
		return request(app)
			.get('/list-eat-titles')
			.expect(200);
	});

	test('GET /list-eat-titles returns JSON', () => {
		return request(app)
			.get('/list-eat-titles')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-eat-descriptions succeeds', () => {
		return request(app)
			.get('/list-eat-descriptions')
			.expect(200);
	});

	test('GET /list-eat-descriptions returns JSON', () => {
		return request(app)
			.get('/list-eat-descriptions')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-eat-images succeeds', () => {
		return request(app)
			.get('/list-eat-descriptions')
			.expect(200);
	});

	test('GET /list-eat-images returns JSON', () => {
		return request(app)
			.get('/list-eat-descriptions')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-events succeeds', () => {
		return request(app)
			.get('/list-events')
			.expect(200);
	});

	test('GET /list-events returns JSON', () => {
		return request(app)
			.get('/list-events')
			.expect('Content-type', /json/);
	});
	
	test('GET /list-reviews succeeds', () => {
		return request(app)
			.get('/list-reviews')
			.expect(200);
	});

	test('GET /list-reviews returns JSON', () => {
		return request(app)
			.get('/list-reviews')
			.expect('Content-type', /json/);
	});
	
	test('POST /add-review succeeds', () => {
		return request(app)
			.post('/add-review')
			.expect(200);
	});
	
	test('POST /add-review succeeds', () => {
		const params = {add_review_title: 'Test',
						add_review_author: 'Test',
						add_review_text: 'Test'};
		return request(app)
			.post('/add-review')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 1 succeeds', () => {
		const params = {event_no: '1',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 2 succeeds', () => {
		const params = {event_no: '2',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 3 succeeds', () => {
		const params = {event_no: '3',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 4 succeeds', () => {
		const params = {event_no: '4',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 5 succeeds', () => {
		const params = {event_no: '5',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 6 succeeds', () => {
		const params = {event_no: '6',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 7 succeeds', () => {
		const params = {event_no: '7',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 8 succeeds', () => {
		const params = {event_no: '8',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	test('POST /subscribe-event 9 succeeds', () => {
		const params = {event_no: '9',
						add_event_count: '20'};
		return request(app)
			.post('/subscribe-event')
			.send(serialise(params))
			.expect(200);
	});
	
	
});