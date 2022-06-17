import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';
function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
    const isLogged = useSelector((state: RootStore) => state.usersSlice.isLogged);
    if (!isLogged) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;