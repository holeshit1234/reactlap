import React from 'react'
import './Detail.css'
import { Players } from '../../shared/ListOfPlayer'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function Detail() {
    const [readMore, setReadMore] = useState(false);
    const userName = useParams();
    const film = Players.find(obj => {
        return obj.id === userName.id;
    });
    let cost = film.cost.toLocaleString();

    return (
        <article className="single-tour">
            <img src={`../${film.img}`} alt='' />
            <footer>
                <div className="tour-info">
                    <h4>{film.name}</h4>
                    <h4 className="tour-price">${film.cost}</h4>
                </div>
                <p>
                    {readMore ? film.info : `${film.info.substring(0, 50)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : '  read more'}
                    </button>
                </p>
            </footer>
        </article>



    )

}
