import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import manageDelete from '../../utils/manageDelete';
import TableItem from '../TableItem/TableItem';

const ManageItem = () => {
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/allproducts?page=${page}&&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setItems(data.result)
                    const pageNumber = Math.ceil(data.count / size)
                    setCount(pageNumber)
                }
            })
    }, [page, size])


    const deleteItem = async (id) => {
        const data = await manageDelete(id)
        console.log(data)
        if (data.success && data.result.deletedCount) {
            const remainItem = items.filter(item => item._id !== id)
            setItems(remainItem)
        } else {
            toast.error(data.error)
        }

    }

    return (
        <div className='mb-10 container mx-auto px-4'>
            <h3 className='my-10 text-2xl font-medium'>Manage Inventories</h3>


            <div className='text-left mb-6'>
                <Link to="/add" className='inline-block mt-8  py-4 px-8 font-medium text-white  bg-slate-800 cursor-pointer hover:text-white hover:bg-slate-800 rounded duration-500' >Add Items</Link>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">

                                Item
                            </th>
                            <th scope="col" className="px-6 py-3">
                                By
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <TableItem item={item} key={item._id} deleteItem={deleteItem}></TableItem>)

                        }

                    </tbody>
                </table>
                {
                    [...Array(count).keys()].map(number => <button
                        key={number} className={`${page === number ? 'bg-slate-700 text-white' : ''} px-2  m-2 inline-block rounded-full border-2 border-slate-700`} onClick={() => setPage(number)}>{number + 1}</button>)
                }
                <select onChange={(event) => setSize(event.target.value)} id="" defaultValue={size} className='border-0 '>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

        </div>
    );
};

export default ManageItem;