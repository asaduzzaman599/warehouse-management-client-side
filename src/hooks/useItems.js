const { useEffect, useState } = require("react")

const useItems = (limit) => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return [items, setItems];
}

export default useItems;