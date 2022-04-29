import React, { useEffect, useState } from 'react';

const ManageItem = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h3>Manage Inventories:{items.length}</h3>

        </div>
    );
};

export default ManageItem;