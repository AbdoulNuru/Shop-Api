import chai from 'chai';
import chaiHttp from "chai-http";
import app from '../app';

chai.should();
chai.use(chaiHttp);

const user = {  
  firstname: "Nuru",
  lastname: "Diouf",
  email: "nuru@gmail.com",
  password: "nuru123",
  gender: "male",
  department: "IT",
  address: "kicukiro"
};


describe('Shop Api', ()=>{
    it('should create a user', (done)=>{
        chai
          .request(app)
          .post("/api/v1/auth/signup")
          .send(user)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property(
              "message",
              "User created successfully"
            );
            done();
          });
    });

    it("should not create a user if the email already exist", done => {
      chai
        .request(app)
        .post("/api/v1/auth/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.have.property("error", "User exist");
          done();
        });
    });

    it("should login a user", done => {
      chai
        .request(app)
        .post("/api/v1/auth/signin")
        .send({ email: "nuru@gmail.com", password: "nuru123" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("message", "Logged in successfully");
          done();
        });
    });

    it("should not login a user if he/she don't have an account", done => {
      chai
        .request(app)
        .post("/api/v1/auth/signin")
        .send({ email: "nurugmail.com", password: "nuru123" })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property(
            "error",
            "It seems like you don't have an account"
          );
          done();
        });
    });

    it("should not login a user if the email or password is incorrect", done => {
      chai
        .request(app)
        .post("/api/v1/auth/signin")
        .send({ email: "nuru@gmail.com", password: "nuru12" })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.have.property("error", "incorrect email or password");
          done();
        });
    });
});

