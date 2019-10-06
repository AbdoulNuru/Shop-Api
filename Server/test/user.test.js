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


describe('Testing', ()=>{
    it('should create a user', (done)=>{
        chai
          .request(app)
          .post("/api/v2/auth")
          .send(user)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property(
              "message",
              "User created successfully"
            );
            //res.body.student.should.have.property("name", "Seth");
            done();
          });
    });
});
