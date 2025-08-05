import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function GuestRoutes() {
    const { authUser } = useAuth();

    return !authUser ? <Outlet /> : <Navigate to="/" />;
}

export default GuestRoutes;