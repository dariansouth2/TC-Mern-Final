import {API_URL} from './config'

export default () =>{
    return fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": 'application'
        }
    })
    .then(response => response.json())
}