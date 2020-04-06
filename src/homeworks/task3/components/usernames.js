import { useEffect, useState } from 'react'
import apiClient from "./axios";

export default function useUsersnames() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        apiClient.get('/users')
            .then(response => {
                setUsers(response.data)
            })
    }, []);

    return [ users ];
}