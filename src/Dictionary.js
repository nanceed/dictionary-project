import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    
    function search() {
        //documentation: https://www.shecodes.io.learn/apis/dictionary
        let apiKey = "0f09c464cb3936o320tabf9addd38da4";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        
        let imageApiKey = "0f09c464cb3936o320tabf9addd38da4";
        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
        axios.get(imageApiUrl).then(handleImageResponse);
    }
    
    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse(response) {
        setPhotos(response.data.photos);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word would you like to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange}
                            defaultValue={props.defaultKeyword} />
                        <input type="submit" className="search-button" value="Search" />
                    </form>
                    <div className="hint">
                        suggested words: autumn, yoga, wine, coding...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}