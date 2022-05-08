import React from 'react';

const TopSellingItem = ({ items }) => {
    return (
        <div><h3 className='my-10 text-3xl font-semibold'>Top 3 Selling Product</h3>
            <div className=" mb-8 w-5/6 mx-auto relative overflow-x-auto  sm:rounded-lg container mx-auto">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">

                                Item
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Sold
                            </th>


                        </tr>
                    </thead>
                    <tbody >
                        {
                            items.map(item => <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-6">
                                    <img src={item.image} className='h-8' alt="" />
                                    {item.name}
                                </th>



                                <td className="px-6 py-4">
                                    {item.sold}
                                </td>


                            </tr>)

                        }

                    </tbody>
                </table>

            </div></div>

    );
};

export default TopSellingItem;