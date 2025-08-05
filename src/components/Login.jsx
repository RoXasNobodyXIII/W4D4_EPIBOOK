import Button from 'react-bootstrap/Button';
import { useAuth } from '../contexts/authContext';

function Login() {
    const { setAuthUser } = useAuth();

    return (
        <>
            <h1>Login</h1>
            <Button onClick={() => setAuthUser({ username: 'Manu' })}>
                Login
            </Button>
        </>
    );
}

export default Login;