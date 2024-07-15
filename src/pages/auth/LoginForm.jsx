import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Actions
import { AuthActions } from '../../store/redux-slices/authSlice';

export default function LoginForm() {
  // Navigate
  const navigate = useNavigate();

  // disatch
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { username, password } = values;
    dispatch(AuthActions.login({ username, password, navigate }));
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
