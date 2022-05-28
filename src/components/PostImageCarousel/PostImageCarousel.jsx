import React, { useEffect, useState } from "react";
import axios from 'axios';
import Carousel from 'components/Carousel/Carousel';

function PostImageCarousel(props) {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://web.test/api/posts/' + props.postId + '/images'
        })
        .then(response => {
            const array = [];
            let count = 0;
            response.data.data.map(slide => (
                array.push({imageUrl: slide.image_url, index: count++})
            ));
            setSlides(array);
        })
    }, [])

    return ( 
        <Carousel slides={slides}/>
     );
}

export default PostImageCarousel;