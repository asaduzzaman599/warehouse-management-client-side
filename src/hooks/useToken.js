import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user)
    useEffect(() => {
        const email = user?.email;
        console.log(email)
        if (email) {
            fetch('http://localhost:5000/login', {
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