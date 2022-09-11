import type { NextPage } from 'next';
import { LoginPanel } from 'components/LoginPanel';

const SignIn: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <LoginPanel text="Sign In" />
    </div>
  );
};

export default SignIn;
