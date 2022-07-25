import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../Context/AuthContext";
import "./common.css";

export default function login() {
  // const [click,setClick]=useState(false);
  const [clickLogin, setClicklogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  // const [loading, setLoading] = useState();
  const { login, lifesaver, exchange, exchangel, swapel } = useAuth();
  const navigate = useNavigate();

  const modaloff = () => {
    exchangel(2);
    setClicklogin(false);
  };

  const otherfunctionL = () => {
    setClicklogin(false);
    exchange(0);
    exchangel(4);
  };

  const otherfunction = () => {
    setClicklogin(false);
    exchange(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setError("");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    lifesaver(1);
    try {
      setError("");
      // setLoading(true);
      await login(email, password);
      navigate("/dashboard");
      alert("login successfully.");
    } catch (err) {
      console.log(err);
      // setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <div>
      {swapel && (
        <Modal show={swapel} className="modal_all">
          <Modal.Body>
            <Form className="py-5 px-2" onSubmit={handleSubmit}>
              <h1 className="text-dark text-center text-bolder">Log In</h1>
              <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />

              {/* <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicUsername">
          
            <Form.Control type="text" placeholder="Enter username" required 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
          </Form.Group> */}

              <Form.Group
                className="mb-3 col-11 mx-auto"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-11 mx-auto"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-11 ms-4 text-muted"
                controlId="formBasicRemember"
              >
                <Form.Check type="checkbox" label="Remember Me" required />
              </Form.Group>

              <Button
                variant="primary"
                className="m-1 col-4 ms-4 Button"
                type="submit"
              >
                Submit
              </Button>
              <Button
                variant="primary"
                className="m-1 col-4 ms-4 Button"
                onClick={modaloff}
              >
                Close
              </Button>

              {error && <p className="error">{error}</p>}
              <hr variant="primary" className="bg-primary w-75 mx-auto" />
              <p className="text-center">
                {" "}
                don't have an account
                {/* <a href=""  className="text-primary" onClick={otherfunction}> Sign Up</a> */}
                <Button variant="link" onClick={otherfunctionL}>
                  signup
                </Button>
              </p>
            </Form>
          </Modal.Body>
        </Modal>
      )}

      <Nav.Link
        href="#"
        onClick={() => setClicklogin(true)}
        className="m-1 p-2 btn btn-dark"
        style={{ color: "#fff" }}
      >
        Log In
      </Nav.Link>

      <Modal show={clickLogin} className="modal_all">
        <Modal.Body>
          <Form className="py-5 px-2" onSubmit={handleSubmit}>
            <h1 className="text-dark text-center text-bolder">Log In</h1>
            <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />

            {/* <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicUsername">
       
         <Form.Control type="text" placeholder="Enter username" required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
       </Form.Group> */}

            <Form.Group
              className="mb-3 col-11 mx-auto"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-11 mx-auto"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-11 ms-4 text-muted"
              controlId="formBasicRemember"
            >
              <Form.Check type="checkbox" label="Remember Me" required />
            </Form.Group>

            {/* <Button variant="primary" className="m-1 col-4 ms-4" type="submit" >
         Submit
       </Button>
       <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClicklogin(false)}>
         Close
       </Button> */}

            <Button
              variant="primary"
              className="m-1 col-4 ms-4 Button"
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="primary"
              className="m-1 col-4 ms-4 Button"
              onClick={modaloff}
            >
              Close
            </Button>

            {error && <p className="error">{error}</p>}
            <hr variant="primary" className="bg-primary w-75 mx-auto" />
            <p className="text-center">
              {" "}
              don't have an account?
              {/* <a a href=""  className="text-primary" onClick={otherfunction}> Sign Up</a> */}
              <Button variant="link" onClick={otherfunction}>
                signup
              </Button>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
