import React,{ useEffect, useState } from 'react';
import { Button, Form, Modal, Nav, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../../Context/AuthContext';
import './common.css';
function Signup() {
    const [click,setClick]=useState(false);
    const [clickLogin,setClicklogin]=useState(false);
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [valid, setValid] = useState(true);
  const { signup, lifesaver , swape, exchange, exchangel} = useAuth();
  const [change, setChange] = useState( false);

   const modaloff=()=>{
    exchange(2)
  
   }

   const otherfunctionS=() =>{
    setClick(false)
    exchangel(0)
    exchange(4)
  }

   const otherfunction =() =>{
    setClick(false)
    exchangel(0)
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validateEmail= (event) =>{
    const email = event;
    if (emailRegex.test(email)) {
      setValid(true);
    } else {
      setValid(false);
      setError('Please enter a valid email!');
    }
  }

  const handlechange=e=>{
         setEmail(e.target.value);
         validateEmail(e.target.value)
  }
 
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
       setError('')
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e) {
    lifesaver(0);
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    if(password.length <6 ){
      return setError("Password should be at least 6 characters");
    }

    if(username.length >5 ){
      return setError("Username shouldn't be greater than 5 characters");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate('/dashboard');
      setClick(false);
      alert('account created successfully')
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
    <div>
             {/* <Nav.Link href="#" className="m-1 btn btn-dark" style={{color: '#fff'}}>Sign Up</Nav.Link> */}
             {swape && 
           <Modal show={swape} className="modal_all">

           <Modal.Body>
             <Form className="py-5 px-2" onSubmit={handleSubmit}>
               <h1 className="text-dark text-center text-bolder">Sign Up</h1>
               <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />
               <Row>
                 <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="formBasicFirstName">
                   <Form.Control type="text" placeholder="First Name" required />
                 </Form.Group>
  
                 <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="formBasicLastName">
                   <Form.Control type="text" placeholder="Last Name" required />
                 </Form.Group>
               </Row>
  
               <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicUsername">
             
                 <Form.Control type="text" placeholder="Enter Username" 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 required />
               </Form.Group>
  
               <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicEmail">
              
                 <Form.Control type="email" placeholder="Enter email" required 
                 value={email}
                 onChange={ handlechange}/>
                </Form.Group>
  
               <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicPassword">
    
                 <Form.Control type="password" placeholder="Password" required 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
               </Form.Group>
  
               <Form.Group className="mb-3 col-11 mx-auto" controlId="formConformPassword">
    
                  <Form.Control type="password" placeholder="Confirm Password" required 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Form.Group>
  
               <Form.Group className="mb-3 col-11 ms-4 text-muted" controlId="formBasicCheckbox">
                 <Form.Check type="checkbox" label="I agree to the terms of service and the privacy policy" required value={agree}
                onChange={(e) => setAgree(e.target.value)} />
               </Form.Group>
  
               {/* <Button variant="primary" className="m-1 col-4 ms-4" type="submit" >
                 Submit
               </Button>
               <Button variant="primary" className="m-1 col-4 ms-4" onClick={modaloff}>
                 Close
               </Button> */}

         <Button variant="primary" className="m-1 col-4 ms-4 Button" type="submit" >
            Submit
          </Button>
          <Button variant="primary" className="m-1 col-4 ms-4 Button" onClick={modaloff}>
            Close
          </Button>
  
               {error && <p className="error">{error}</p>}
               <hr variant="primary" className="bg-primary w-75 mx-auto" />
               <p className="text-center">Already have an account ?
               <Button variant="link" onClick={otherfunctionS}  >
                 login
             </Button>
               </p>
  
             </Form>
           </Modal.Body>
             </Modal> 
}
                 <Nav.Link href="#" onClick={()=> setClick(true)} className="m-1 p-2 btn btn-dark" style={{color: '#fff'}}>Sign Up</Nav.Link>
       
               <Modal show={click} className="modal_all">

         <Modal.Body>
           <Form className="py-5 px-2" onSubmit={handleSubmit}>
             <h1 className="text-dark text-center text-bolder">Sign Up</h1>
             <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />
             <Row>
               <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="formBasicFirstName">
                 <Form.Control type="text" placeholder="First Name" required />
               </Form.Group>

               <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="formBasicLastName">
                 <Form.Control type="text" placeholder="Last Name" required />
               </Form.Group>
             </Row>

             <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicUsername">
           
               <Form.Control type="text" placeholder="Enter Username" 
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required />
             </Form.Group>

             <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicEmail">
            
               <Form.Control type="email" placeholder="Enter email" required 
               value={email}
               onChange={ handlechange}/>
              </Form.Group>

             <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicPassword">
  
               <Form.Control type="password" placeholder="Password" required 
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>
             </Form.Group>

             <Form.Group className="mb-3 col-11 mx-auto" controlId="formConformPassword">
  
                <Form.Control type="password" placeholder="Confirm Password" required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
              </Form.Group>

             <Form.Group className="mb-3 col-11 ms-4 text-muted" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="I agree to the terms of service and the privacy policy" required value={agree}
              onChange={(e) => setAgree(e.target.value)} />
             </Form.Group>

             <Button variant="primary" className="m-1 col-4 ms-4 Button" type="submit" >
            Submit
          </Button>
          <Button variant="primary" className="m-1 col-4 ms-4 Button" onClick={()=> setClick(false)}>
            Close
          </Button>

             {/* <Button variant="primary" className="m-1 col-4 ms-4" type="submit" >
               Submit
             </Button>
             <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClick(false)}>
               Close
             </Button> */}

             {error && <p className="error">{error}</p>}
             <hr variant="primary" className="bg-primary w-75 mx-auto" />
             <p className="text-center">Already have an account ?

             {/* <a href="login" onClick={()=> setClicklogin(true)} className="text-primary">Log In</a> */}
             <Button  variant="link" onClick={otherfunction}  >
            login 
         </Button>


             </p>

           </Form>
         </Modal.Body>
                </Modal> 


    </div>
  )
}

export default Signup