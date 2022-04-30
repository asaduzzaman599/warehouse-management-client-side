import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Item from '../Shared/Item/Item';
import NoData from '../Shared/NoData/NoData';

const Myitems = () => {
    const [items, setItems] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/myproduct?email=${email}`
        const token = localStorage.getItem('access_token')

        fetch(url, {
            headers: { token }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.success) {
                    setItems(data.result)
                }
                if (data?.message && user) {
                    toast.error(data?.message)
                    signOut(auth)
                    navigate('/login')
                }
            })
    }, [user])

    console.log(items)
    return (
        <div className='mb-10'>

            <h3 className='my-10 text-2xl font-medium'>My Items</h3>

            <div className='grid md:grid-cols-3 container mx-auto gap-8'>
                {items.length > 0 ?
                    items.map(item => <Item key={item._id}
                        item={item}
                    ></Item>)
                    : <NoData></NoData>
                }
            </div>
        </div>
    );
};

export default Myitems;