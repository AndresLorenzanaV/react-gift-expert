import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [gifs, setgifs] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getNewGifs = async () =>{
        const newGifs = await getGifs(category);
        setgifs(newGifs);
        setisLoading(false);
    }

    useEffect(() => {
        getNewGifs();
    },[]);

    return{
        gifs,
        isLoading
    }
}
