import React from 'react';

const TableItem = ({ item, deleteItem }) => {
    const { _id, name, email, image, quantity, sold, price, supplier } = item;
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-6">
                <img src={image} className='h-8' alt="" />
                {name}
            </th>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                {supplier ? supplier : ""}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4">
                {sold}
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 py-4 text-right">
                <button onClick={() => deleteItem(_id)} className="font-medium font-bold text-red-600 dark:text-red-500 hover:underline">X</button>
            </td>
        </tr>
    );
};

export default TableItem;