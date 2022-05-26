import Carousel from "components/Carousel/Carousel";

function Welcome() {

    const slide1 = {
        index: 0, 
        imageUrl: "images/carousel1.jpg", 
        caption: {
            h2: "Have you lost your pet?", 
            p: "Just submit an announcement of pet's loss on our website!"
        }, 
        button: {
            href: "/lost/post/create", 
            caption: "Submit"
        }
    }

    const slide2 = {
        index: 2, 
        imageUrl: "images/carousel2.jpg", 
        caption: {
            h2: "Do you wanna find shelters in your city?", 
            p: "There is information about shelters that you need"
        }, 
        button: {
            href: "/shelters", 
            caption: "Find more"
        }
    }

    const slides = [slide1, slide2]

    return ( 
        <Carousel slides={slides} />
     );
}

export default Welcome;