const tools = require("../index");
const mockdate = require("mockdate");
const expect = require("chai").expect;
const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
var should = chai.should();

chai.use(chaiHttp);

describe("", () => {
  before(() => {
    console.log("This part executes once before all tests");
  });

  after(() => {
    console.log("This part executes once after all tests");
  });

  // We can add nested blocks for different tests
  describe("Test1", () => {
    beforeEach(() => {
      const date = "2021-06-19T18:09:12.451Z";
      mockdate.set(date.toLocaleString());
    });

    it("If weekday is sunday should return sunday date 6/13/2021, 11:39:12 PM", () => {
      const result = tools.getWeekDayDate(0);
      const expectedResult = "6/13/2021, 11:39:12 PM";
      expect(result).equal(expectedResult);
    });

    it("If weekday is monday should return monday date 6/14/2021, 11:39:12 PM", () => {
      const result = tools.getWeekDayDate(1);
      const expectedResult = "6/14/2021, 11:39:12 PM";
      expect(result).equal(expectedResult);
    });
  });

  describe("/GET message", () => {
    it("it should GET a message", (done) => {
      const expectedResult="<p> Monday 6/14/2021, 11:39:12 PM </p>\r\n";
      chai
        .request(tools.server)
        .get("/Monday")
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.be.eql("text/html");
          expect(res.text).equal(expectedResult);
          done();
        });
    });

    it("it should GET a message", (done) => {
      const expectedResult="<p> Tuesday 6/15/2021, 11:39:12 PM </p>\r\n";
      chai
        .request(tools.server)
        .get("/Tuesday")
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.be.eql("text/html");
          expect(res.text).equal(expectedResult);
          done();
        });
    });
  });
});
