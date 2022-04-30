import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import manageDelete from '../../utils/manageDelete';
import TableItem from '../TableItem/TableItem';

const ManageItem = () => {
    const [items, setItems] = useItems()
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
        <div className='mb-10 container mx-auto'>
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
            </div>

        </div>
    );
};

export default ManageItem;