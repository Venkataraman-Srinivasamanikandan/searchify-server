const server = require('../server');

const chai = require('chai'),
	chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();


describe('Attraction service', () => {
	it("It should send unautorized if there is no valid token in req", (done) => {
		chai
			.request(server)
			.get("/api/v1/attraction/65d6ce26cfca75e1b7f231ea")
			.set("authorization", "Bearer asdas")
			.end((err, res) => {
				res.status.should.be.equal(401);
				done();
			})
	})
	it("It should send the list of attractions under the given country", (done) => {
		chai
			.request(server)
			.get("/api/v1/attraction/65d6ce26cfca75e1b7f231ea")
			.set("authorization", "Bearer swagger")
			.end((err, res) => {
				res.status.should.be.equal(200);
				done();
			})
	})
	it("It should send 404 if there are no attractions under the given country", (done) => {
		chai
			.request(server)
			.get("/api/v1/attraction/65d6ea55ab17f7548ba6bc42")
			.set("authorization", "Bearer swagger")
			.end((err, res) => {
				res.status.should.be.equal(404);
				done();
			})
	})
	it("It should send 401 if the given country_id is not a valid mongoose id", (done) => {
		chai
			.request(server)
			.get("/api/v1/attraction/asd")
			.set("authorization", "Bearer swagger")
			.end((err, res) => {
				res.status.should.be.equal(400);
				done();
			})
	})
})