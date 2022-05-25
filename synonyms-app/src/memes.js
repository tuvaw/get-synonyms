import $ from "jquery"
import React, { useEffect, useState } from 'react';

export default function Memes(props) {
    const [memes, setMemes] = useState([]);
        
    function getMemes() {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=iKWDKWDKsyoOtFEfkb8EzQFO7QuP2LPr&limit=1&q=" + props.searchString,
            method: 'GET',
            dataType: "JSON",
            limit: "1"        
        }).done(function(data) {
            setMemes(data.data);
        });
    }

    useEffect(function() {
        getMemes();
    }, [props.searchString]);

    return (
        <div>
            {memes.map(meme => <img src={meme.images.original.url} alt='GIF' /> )}
        </div>
    )
};