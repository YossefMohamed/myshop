import React from 'react'
import {  Link } from "react-router-dom";
import { Form , Button , Row ,Col , Container} from "react-bootstrap";
import { dispatch } from "react-redux";
import { login } from '../actions/userAction';

export default function loginScreen(props) {

    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    redircet=props.location.search ? location.search.split('=')[1] : '/'
    const submitHandler =()=>{
        dispatch(login(email,password))
    }
    const dispatch = dispatch();
    const userLogin =  useSelector(state => (state => state.userLogin))
    const { loading  , error ,userInfo } = userLogin
    useEffect(() => {
        if(userInfo){
            props.history.push(redircet)
        }
    }, [props.history , userInfo , redircet])
    return (
        <Container>
               <Row className="jsutify-content-md-center">
                    <Col xs={12} md={6}>
            <h1>
                Sign In
            </h1>

            {error && <Message variant='danger'>{error}</Message>}

            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>

<Form.Control type='email' placeholder='Enter Your Mail !!' value={email}
onChange={e=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                <Form.Label>password</Form.Label>

<Form.Control type='password' placeholder='Enter Your Paswword !!' value={password}
onChange={e=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>


                <Button type='submit' variant='dark'>
                    Sign In
                </Button>


            </Form>





<Row class='py-3'>
    <Col>
    New Customer ? 
Register

<Link to={redircet ? `register?redirect=${redircet}` :'/register' }>
    Register
</Link>
    </Col>
</Row>







                    </Col>
                   
                   </Row> 

        </Container>
    )
}
