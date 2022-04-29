import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Myitems;