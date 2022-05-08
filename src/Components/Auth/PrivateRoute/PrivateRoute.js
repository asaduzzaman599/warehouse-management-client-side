import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const PrivateRoute = ({ children }) => {
    let [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        //showing loading
        return <Loading></Loading>
    }
    if (!user) {
        //user not logged navigate login page
        toast("Please login first")
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default PrivateRoute;