// ** Layout
import AuthLayout from '@/layouts/AuthLayout';
import Signin from './component/Signin';

const Login = () => {
  return (
    <div>
      <AuthLayout
        title="Welcome Back"
        discription="Welcome back! Please enter your details."
      >
        <div className="form_container mt-4" style={{ flexDirection: 'column' }}>
         <Signin />
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;

