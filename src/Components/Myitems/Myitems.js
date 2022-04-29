import React, { useEffect, useState } from 'react';
import Item from '../Shared/Item/Item';

const Myitems = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        const email = 'asaduzzamansoumit@gmail.com'
        const url = `http://localhost:5000/myproduct?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>

            <h3>My Items:{items.length}</h3>

            <div className='grid md:grid-cols-3 container mx-auto gap-8'>
                {
                    items.map(item => <Item key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Myitems;