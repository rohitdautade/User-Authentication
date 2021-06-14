import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
function Registraion() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [address, setaddress] = useState("")
    const [emailid, setemail] = useState("")
    const [user, setuserid] = useState("")
    const [pass, setpassword] = useState("")
    var regform = {
        fname: fname,
        lname: lname,
        addr: address,
        email: emailid,
        username: user,
        password: pass

    }



    function senddata() {


        axios.post('/registraion', regform).then(res => {
            console.log(res);

        }).catch(err => {
            console.log(err);
        })

    }
    return (

        <>
            <div className="container">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} xs={12} >
                        <div className="bg-secondary p-5 mt-5">
                            <h3 className="text-center text-danger">User Registraion</h3>
                            <form onSubmit={senddata}>
                                <Row>
                                    <Col>
                                        <input type="text" className="form-control mt-3 " placeholder="  Enter Your First Name" required value={fname} onChange={(e) => { setfname(e.target.value) }}></input>
                                    </Col>
                                    <Col>
                                        <input type="text" className="form-control mt-3 " placeholder="  Enter Your Last Name" required value={lname} onChange={(e) => { setlname(e.target.value) }}></input>
                                    </Col>
                                </Row>
                                <textarea className="form-control mt-3" placeholder=" Enter Your Address" required value={address} onChange={(e) => { setaddress(e.target.value) }}></textarea>
                                <input type="email" className="form-control mt-3" placeholder="Enter Your Email" required value={emailid} onChange={(e) => { setemail(e.target.value) }}></input>
                                <input type="text" className="form-control mt-3" placeholder="Enter Your Username" required value={user} onChange={(e) => { setuserid(e.target.value) }}></input>

                                <input type="password" className="form-control mt-3 " placeholder="Enter Your Password" required value={pass} onChange={(e) => { setpassword(e.target.value) }}></input>


                                <input type="submit" className="btn btn-primary btn-block mt-3" value="Create Account"></input>
                            </form>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default Registraion;