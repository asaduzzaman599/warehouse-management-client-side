const manageDelete = async (id) => {
    const url = `http://localhost:5000/product/${id}`
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
