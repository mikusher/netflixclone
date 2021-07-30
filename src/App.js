import React, {useEffect, useState} from 'react'
import TMDB from './Tmdb'

export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            // get all list
            let list = await TMDB.getHomeList();
            setMovieList(list);
        }
        loadAll();
    }, []);

    return (
        <div className="page">
            ola mundo!
        </div>
    );
}