const { useEffect, useState } = require("react")

const useItems = (limit) => {

    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/products?limit=${limit}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return [items, setItems];
}

export default useItems;