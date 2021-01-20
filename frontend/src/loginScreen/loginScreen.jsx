import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Message from "./../message/message";
import Loader from "./../loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    console.log(props.history, userInfo, redirect);
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, userInfo, redirect]);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign In</h1>

          {error && <Message variant="danger">{error}</Message>}

          {loading && <Loader />}
          <Form onSubmit={(e) => submitHandler(e)}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter Your Mail !!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter Your Paswword !!"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="dark">
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer ? Register
              <Link
                to={redirect ? `register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
