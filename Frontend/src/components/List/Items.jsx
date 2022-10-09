import { useState, useEffect } from 'react';
import axios from 'axios';

export const Item = ({ item: { name } }) => {
    return (
        <tr>
            <td>{name}</td>
        </tr>
    )
}

export const ItemList = () => {

    const [ items, setItem ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/items')
            .then(res => { setItem(res.data); console.log(res.data); })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => <Item key={item._id} item={item} />)}
                </tbody>
            </table>
        </>
    )
}