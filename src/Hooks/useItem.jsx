import axios from "axios";
import { useEffect, useState } from "react";

const useItem = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios('item.json')
        .then(res => {
            setItems(res.data)
            setLoading(false)
        })
    },[])

    return [items, loading]
};

export default useItem;