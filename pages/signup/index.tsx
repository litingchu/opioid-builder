import type { NextPage } from 'next';
import { LoginPanel } from 'components/LoginPanel';

const SignUp: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <LoginPanel text="Sign Up" isSignUp />
    </div>
  );
};

export default SignUp;
