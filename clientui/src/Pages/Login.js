import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import swal from 'sweetalert';
import { Redirect, withRouter } from 'react-router';

import axios from 'axios';

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [users, setusers] = useState([])




    // var data = [];
    useEffect(() => {
        console.log('i am in useeffect');
        axios.get('/login').then(res => {

            setusers(res.data);
            console.log(users);
        }).catch(err => {
            console.log(err);
        })
        const user1 = users.map((user) => {
            return <div>
                <p>{user.userid}<br />{user.password}</p>
            </div>
        })
        var result = users.map(person => ({ value: person.userid, text: person.password }));
        console.log("i am map2" + result);

    }, [])

    function Loginuser(event) {
        event.preventDefault();

        users.map((user) => {
            if (user.user_id === username && user.password === password) {
                swal('Congratilations', 'login sucess', 'success');
            }
            else {
                swal('Sorry', 'Invalid User name and Password', 'error');

            }
            console.log("ans=" + user.user_id)
        })


    }





    return (
        <>
            <div className="container">

                <Row>
                    <Col md={{ span: 6, offset: 3 }} xs={12} >
                        <div className="bg-secondary p-5 mt-5">

                            <h3 className="text-center text-danger">Login Form</h3>
                            <form onSubmit={Loginuser}>
                                <input type="text" className="form-control mt-3" placeholder="Username" value={username} onChange={(e) => { setusername(e.target.value) }} ></input>
                                <input type="password" className="form-control mt-3" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }}></input>
                                <input type="submit" className="btn btn-primary btn-block mt-3" value="Login"></input>
                            </form>
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Login;