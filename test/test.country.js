const server = require('../server');

const chai = require('chai'),
	chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();


describe('Country service', () => {
	it("It should send unautorized if there is no token in req", (done) => {
		chai
			.request(server)
			.get("/api/v1/country/search/si")
			.end((err, res) => {
				res.status.should.be.equal(401);
				done();
			})
	})
	it("It should send the list of countries matching the search", (done) => {
		const auth = btoa(process.env.TOKEN)
		chai
			.request(server)
			.get("/api/v1/country/search/si")
			.set("authorization", auth)
			.end((err, res) => {
				res.status.should.be.equal(200);
				done();
			})
	})
	it("It should send 404 if non of the countries matching the search", (done) => {
		chai
			.request(server)
			.get("/api/v1/country/search/zzz")
			.set("authorization", "Bearer swagger")
			.end((err, res) => {
				res.status.should.be.equal(404);
				done();
			})
	})
})