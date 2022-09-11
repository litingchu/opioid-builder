import type { NextPage } from 'next';
import { LoginPanel } from 'components/LoginPanel';
import { Col, Row } from 'antd';

const SignUp: NextPage = () => {
  return (
    <Row
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Col>
        <LoginPanel text="Sign Up" isSignUp />
      </Col>
    </Row>
  );
};

export default SignUp;
