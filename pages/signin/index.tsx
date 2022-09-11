import type { NextPage } from 'next';
import { LoginPanel } from 'components/LoginPanel';
import { Col, Row } from 'antd';

const SignIn: NextPage = () => {
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
        <LoginPanel text="Sign In" />
      </Col>
    </Row>
  );
};

export default SignIn;
