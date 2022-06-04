import React, { useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';



function Auth() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/user/register",
    }).then((res) => console.log(res));
  };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/user/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/api/user/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login/Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login or Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1>Register</h1>
            <input
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              placeholder="password" type="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Register</button>
          </div>

          <div>
            <h1>Login</h1>
            <input
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              placeholder="password" type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={() => {
              login()
              getUser()
            }}>Login</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='modal-footer'>
            <Button variant="secondary btn-group"  onClick={handleClose}>Close</Button>
            <Button variant="secondary" onClick={getUser}>Save Your Login</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default Auth;