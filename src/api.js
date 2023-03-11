import React, { useState } from "react";
import axios from "axios";
import './api.css'


const ImageSearch = () => {
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);
    const apiKey = '7d4c4aabc554e77fae42edc5a4b1de7c';

    const searchImages = async () => {
        const response = await axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=12&format=json&nojsoncallback=1`
        );
        setImages(response.data.photos.photo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchImages();
    };

    return (
        <div className="image-search-container">
            <form onSubmit={handleSubmit} className="form-inline">
                <input
                    type="text"
                    placeholder="Search images"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="form-control"
                />
                <button type="submit" className="btn btn-outline-primary">
                    Найти
                </button>
            </form>
            <div className="row">
                {images.map((image) => (
                    <div key={image.id} className="col-md-3 mb-3">
                        <img
                            src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
                            alt={image.title}
                            className="img-fluid rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSearch;
