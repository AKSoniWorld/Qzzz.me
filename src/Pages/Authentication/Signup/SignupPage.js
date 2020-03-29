import React from "react";
import { Card, Row, Col, Input, Button } from "antd";
import "./Signup.css";
import { Link } from "react-router-dom";
export default function SignupPage() {
  return (
    <div>
      <Row
        justify="space-around"
        style={{ alignSelf: "center", height: "100vh" }}
        align="middle"
      >
        <Col span={12}>
          <Card className="login_card">
            <div className="signup-card_top_section">
              <Row align="middle" justify="center">
                <Col align="middle">
                  <h1 className="login_text">ASAMI APP</h1>
                </Col>
              </Row>
              <Row align="middle">
                <Col align="middle">
                  <h2 className="login_text">Login</h2>
                </Col>
              </Row>
              <Row align="middle">
                <Col align="middle">
                  <h4 className="login_text">
                    Using your social account
                  </h4>
                </Col>
              </Row>
            </div>
            <div className="middle_section">
              <Input
                className="email_input_text"
                placeholder="Email or Phone"
              ></Input>
              <Button className="forget_button" type="link">
                Forget your email ?{" "}
              </Button>
              <div className="guest-mode_section">
                <p >Not your computer? Use Guest mode to sign in privately.</p>
              </div>
            </div>
            <div className="footer_section">
              <Row>
                <Col span={24}>
                  <Button className="create-account_button" type="link">
                    Create an account
                  </Button>
                  <Link to="/signup">
                  <Button size="middle" className="login_button" type="primary">
                    Next
                  </Button>
                  </Link>
                  
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}