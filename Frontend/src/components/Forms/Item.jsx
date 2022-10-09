import { useState, useRef } from "react";
import axios from "axios";


export const ItemForm = ({ setItem }) => {
    const [ itemData, setItemData ] = useState({
        description: '',
    })

    const handleClear = () => {
        setItemData({
            description: '',
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:9000/items', {
                description: itemData.description
            });
            console.log(res.data);

            setItem(itemList => [ ...itemList, res.data ]);

            event.target.reset();
            handleClear();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="item-name">Item Name: </label>
                    <input
                        value={itemData.description}
                        onChange={e => setItemData({ ...itemData, description: e.target.value })}
                        placeholder="Item Name"
                    />
                </div>
            </div>
            <div>
                <button type='reset' onClick={handleClear}>Clear</button>
                <button>Submit</button>
            </div>
        </form>
    )
}