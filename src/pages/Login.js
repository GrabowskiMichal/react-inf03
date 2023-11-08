import Menu from '../components/Menu';
import Footer from '../components/Footer.js';
import LoginFunc from '../components/LoginFunc';

function Login() {
    return (
        <div className='Login'>
            <Menu />
            <div className="login">
                <h1>Login test...</h1>
                <LoginFunc />
            </div>
            <Footer />
        </div>
    );
}

export default Login;