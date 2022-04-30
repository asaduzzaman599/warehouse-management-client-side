import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const Additem = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({
        price: '',
        quantity: ''
    })
    const [user] = useAuthState(auth)



    const handleForm = (event) => {
        setError({ price: '', quantity: '' })
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const price = Number(event.target.price.value);
        const quantity = Number(event.target.quantity.value);
        const supplier = event.target.supplier.value;
        const email = user?.email
        if (!price || price < 0) {
            return setError({ ...error, price: "Invalid Price" })
        }
        if (!quantity || quantity < 0) {
            return setError({ ...error, quantity: "Invalid Quantity" })
        }

        const product = {
            name, description, image, price, quantity, supplier, email, sold: 0
        }

        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    navigate('/manage')
                }
            })

    }

    return (
        <div className='w-4/5 mx-auto md:w-2/4 bg-white my-8 p-8 shadow-lg'>
            <h3 className='my-10 text-2xl font-medium'>Add Item</h3>

            <form onSubmit={handleForm} className='text-left mt-4'>
                <div className="relative z-0 w-full mb-6 group">
                    <div className='input-group'>
                        <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Product Name" required />

                    </div>
                    <div className='input-group'>
                        <input type="text" name="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Product Description" required />
                    </div>
                    <div className='input-group'>
                        <input type="text" name="image" className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Image URL" required />
                    </div>
                    <div className='input-group flex gap-5'>
                        <div className='w-full'>
                            <input type="number" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Price" required />
                            <p className='text-xs text-red-600'>{error?.price}</p>
                        </div>

                        <div className='w-full'>
                            <input type="number" name="quantity" className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Quantity" required />
                            <p className='text-xs text-red-600'>{error?.quantity}</p>
                        </div>
                    </div>
                    <div className='input-group'>
                        <input type="text" name="supplier" className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Supplier" required />
                    </div>
                </div>


                <button type="submit" className="mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 e  font-medium rounded text-sm w-2/4  px-5 py-2 text-center">Submit</button>
            </form >
        </div >
    );
};

export default Additem;