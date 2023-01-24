import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	var _token = localStorage.getItem('_token');
	return _token ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
