import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import { useRouter } from 'next/router';

interface Props {
  text: string;
  isSignUp?: boolean;
}

export const LoginPanel: React.FC<Props> = ({ text, isSignUp = false }) => {
  const router = useRouter();

  const onFinishFailed = (errorInfo: any) => {
    message.error(`Failed to ${text}`);
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title={text} style={{ width: 700 }}>
      <Form
        name="login"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
        onFinish={() => router.push('/')}
        onFinishFailed={onFinishFailed}
      >
        {isSignUp ? (
          <>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, min: 1, message: 'First name must be at least 1 character' }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, min: 1, message: 'Last name must be at least 1 characters' }
              ]}
            >
              <Input />
            </Form.Item>
          </>
        ) : null}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, min: 5, message: 'Username must be at least 5 characters' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, min: 8, message: 'Password must be at least 8 characters' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10 }}>
          <Button type="primary" htmlType="submit">
            {text}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
