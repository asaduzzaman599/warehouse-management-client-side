import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.email;
        //access token hook based on login and registration
        if (email) {
            fetch('https://store-house-asaduzzaman599.herokuapp.com/login', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify({ email })
            }).then(res => res.json())
                .then(data => {
                    localStorage.setItem('access_token', data.token)
                    setToken(data.token)
                })
        }
    }, [user])
    return [token]
}

export default useToken