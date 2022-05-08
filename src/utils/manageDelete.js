const manageDelete = async (id) => {

    const url = `https://store-house-asaduzzaman599.herokuapp.com/product/${id}`
    try {
        const res = await fetch(url, {
            method: "DELETE"
        })
        const data = await res.json()

        return data
    } catch (error) {
        return { success: false, error: "Something is wrong" }
    }
}
export default manageDelete
