import React from 'react';

function Carousel(props) {
    const slides = [...props.slides];
    return ( 
        <>
            <div id="myCarousel" className="carousel slide w-100 m-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        slides.map(slide => (
                            <>
                                <div className={"carousel-item " + (slide.index === 0 && "active")}>
                                    <img src={slide.imageUrl} className="d-block w-100 h-50 rounded" alt={"slide" + slide.index} />
                                    {(slide.caption || slide.button) && <div className="container">
                                        <div className="carousel-caption text-start">
                                            {slide.caption.h2 && <h2>{slide.caption.h2}</h2>}
                                            {slide.caption.p && <p>{slide.caption.p}</p>}
                                            {slide.button && <p><a className="btn btn-lg btn-primary" href={slide.button.href}>{slide.button.caption}</a></p>}
                                        </div>
                                    </div>}
                                </div>
                            </>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
        
     );
}

export default Carousel;