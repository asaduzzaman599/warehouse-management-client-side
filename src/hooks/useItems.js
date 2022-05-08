const { useEffect, useState } = require("react")

const useItems = (limit) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const url = `https://store-house-asaduzzaman599.herokuapp.com/products?limit=${limit}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])

    return [items, setItems, loading];
}

export default useItems;