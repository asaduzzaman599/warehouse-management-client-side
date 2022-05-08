import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateStock = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [reLoad, setReload] = useState(false)

    useEffect(() => {
        const url = `https://store-house-asaduzzaman599.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setItem(data.data)
                } else {
                    toast.error(data.error)
                }
            })
    }, [reLoad])

    console.log(item)

    const handleForm = (event) => {
        event.preventDefault()
        const quantity = Number(event.target.quantity.value);
        if (!quantity) {
            return
        }
        const newQuantity = item.quantity + quantity


        updateQuantity({ quantity: newQuantity, sold: item.sold })
        event.target.quantity.value = ''

    }
    const updateQuantity = (newQuantity) => {
        console.log(newQuantity)
        const url = `https://store-house-asaduzzaman599.herokuapp.com/product/${item._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReload(!reLoad)
                } else {
                    toast.error(data.error)
                }
            })
    }

    return (
        <div className='container mx-auto gap-10'>
            <h3 className='text-4xl font-medium text-slate-800 mt-10 font-semibold'>Stock Details</h3>

            <div className='grid md:grid-cols-3  py-2.5 mt-12 '>
                <div className='md:col-span-1 px-6 md:order-2 w-full mx-auto'>



                    {/* from to update stock */}
                    <form onSubmit={handleForm} className=' bg-slate-800 p-6 rounded-lg w-full mx-auto mb-10'>
                        <input type="number" name="quantity" className="block  px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:ring-0 focus:border-blue-600 peer" placeholder="Add Stock" required />
                        <br />
                        <input type="submit" value="Add" className='py-2 px-8 font-medium text-white bg-slate-700 cursor-pointer hover:bg-white hover:text-slate-800 rounded duration-500' />
                    </form>
                    <hr />
                    <Link to="/manage" className='inline-block mb-8 py-4 px-8 font-medium text-white bg-slate-700 cursor-pointer border-2 border-slate-700 hover:bg-white hover:text-slate-800 rounded duration-500' >Manage Inventories</Link>

                </div>
                <div className='md:col-span-2 p-10  bg-white  md:order-1 rounded mx-8 shadow-lg'>
                    <h3 className='text-2xl font-medium text-slate-800 mt-10 mb-2'>{item.name}</h3>
                    <p className='text-gray-500'>ID: {item._id}</p>

                    <div className='flex flex-col md:flex-row gap-10 mt-4 items-center'>
                        <div className='image-content w-full  mb-10'>
                            <img src={item?.image} className="w-full" alt="" />

                        </div>
                        <div className='w-full text-left'>


                            <p className='text-sm text-gray-500 text-center mb-2'>{item?.description}</p>
                            <p><span className='font-semibold'>Supplier :</span>  {item.supplier}</p>
                            <p><span className='font-semibold'>Quantity:</span>  {item?.quantity} piece </p>
                            <p><span className='font-semibold'>Total Sold:</span>  {item?.sold} piece </p>
                            <p><span className='font-semibold'> ${item?.price}</span> per piece</p>


                        </div>
                    </div>
                    <button className='w-full bg-slate-700 border-2 border-slate-700 duration-500 text-white w-2/4 mx-auto py-4  rounded-full hover:bg-white hover:text-slate-800 font-medium ' onClick={() => updateQuantity(item.quantity > 0 ? { quantity: item.quantity - 1, sold: item.sold + 1 } : { quantity: item.quantity, sold: item.sold })}>{item.quantity > 0 ? "Delivered" : "Sold Out"}</button>
                </div>


            </div>
        </div>
    );
};

export default UpdateStock;