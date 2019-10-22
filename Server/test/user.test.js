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
});

