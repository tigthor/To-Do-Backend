import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import {
	tokenToUse
} from '../fixtures/user.fixture';
import { newTodo, malformedTodo } from '../fixtures/todo.fixture';

chai.should();
chai.use(chaiHttp);

const todoTest = () => {
  describe("/POST createTodo", () => {
    it("Should create todo", (done) => {
      chai
        .request(app)
        .post("/api/todo")
        .set("authorization", `bearer ${tokenToUse}`)
        .send(newTodo)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("data");
        });
      done();
    });

    it("Should throw error when no token supplied", (done) => {
      chai
        .request(app)
        .post("/api/todo")
        .send(newTodo)
        .end((err, res) => {
          res.body.should.be.an("object");
          res.status.should.be.equal(401);
          res.body.should.have.property("message");
        });
      done();
    });

    it("Should check to input validation", (done) => {
      chai
        .request(app)
        .post("/api/todo")
        .set("authorization", `bearer ${tokenToUse}`)
        .send(malformedTodo)
        .end((err, res) => {
          res.body.should.be.an("object");
          res.status.should.be.equal(422);
          res.body.should.have.property("message");
        });
      done();
    });
  });
  describe("/GET createTodo", () => {
    it("Should get todo", (done) => {
      chai
        .request(app)
        .get("/api/todo/1")
        .set("authorization", `bearer ${tokenToUse}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("data");
        });
      done();
    });
  });

  describe("/GET allTodos", () => {
    it("Should get All todos", (done) => {
      chai
        .request(app)
        .get("/api/todos")
        .set("authorization", `bearer ${tokenToUse}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("data");
        });
      done();
    });
  });
  describe("/POST createTodo", () => {
    it("Should create todo", (done) => {
      chai
        .request(app)
        .post("/api/todo")
        .set("authorization", `bearer ${tokenToUse}`)
        .send(newTodo)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("data");
        });
      done();
    });
  });
  describe("/POST createTodo", () => {
    it("Should create todo", (done) => {
      chai
        .request(app)
        .post("/api/todo")
        .set("authorization", `bearer ${tokenToUse}`)
        .send(newTodo)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("data");
        });
      done();
    });
  });
  
};

export default todoTest;
