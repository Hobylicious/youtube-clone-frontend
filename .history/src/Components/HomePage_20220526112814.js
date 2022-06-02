import React, { useState, useEffect } from 'react'
import Header from './Header'
import History from './History'


async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
            "x-rapidapi-key": '9877f2eb6bmshad910d1fedcdf8ep13db1ejsn07b69fdb0f8c'
        }
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter(item => item.type === 'video');
}

function HomePage() {

    const [query, setQuery] = React.useState('Music');
    const [list, setList] = React.useState(null);
    const search = (e) => {
        e.preventDefault();
        searchYouTube(query).then(setList);
    };



    return (
        <>
            <Header />
            <div className="app">

                <form onSubmit={search}>
                    <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
                    <button>Search</button>
                </form>

                {list &&
                    (list.length === 0
                        ? <p>No results</p>
                        : (
                            <ul className="items">
                            {list.map(item => (
                                    
                                console.logu
                                
                                    <li className="item" key={item.id}>
                                        <div>
                                            <b><a href={item.url}>{item.title}</a></b>
                                            <p>{item.description}</p>
                                        </div>
                                        <ul className="meta">
                                            <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                                            <li>Views: {item.views}</li>
                                            <li>Duration: {item.duration}</li>
                                            <li>Uploaded: {item.uploadedAt}</li>
                                        </ul>
                                        <img alt="" src={item.bestThumbnail.url} height="75" />
                                    </li>
                                ))}
                            </ul>
                        )
                    )
                }
            </div>
            <History />
        </>
    );
}

export default HomePage