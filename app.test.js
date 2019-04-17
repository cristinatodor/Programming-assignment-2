'use strict';

const app = require('./app');
const request = require('supertest');

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
	
	test('POST /subscribe-event succeeds', () => {
		return request(app)
			.post('/subscribe-event')
			.expect(200);
	});
	
	
	
	
	
	
	/*test('GET /list includes curly', () => {
        return request(app)
			.get('/list')
			.expect(/Curly/);
    }); */
	
	/*test('POST /people needs access_token', () => {
        return request(app)
	    .post('/people')
	    .expect(403);
    })

    test('POST /people cannot replicate', () => {
	const params = {access_token: 'concertina',
			username: 'doctorwhocomposer',
			forename: 'Bob',
			surname: 'Builder'};
        return request(app)
	    .post('/people')
	    .send(serialise(params))
	    .expect(400);
    }); */
});