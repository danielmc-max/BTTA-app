import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PhotoGallery = () => {

    return (
        <div className="photo-gallery" id="PhotoGallery">
            <h3>PhotoGallery</h3>
            <Carousel>
                <div>
                    <img src="table_tennis_friends.jpeg" alt="friends_smiling_at_table_tennis_table" />
                    <p className="Legend">Photo 1</p>
                </div>
                <div>
                    <img src="table_tennis_girl.jpeg" alt="young_girl_playing_table_tennis" />
                    <p className="Legend">Photo 2</p>
                </div>
                <div>
                    <img src="table_tennis_heat.jpeg" alt="a_heated_competitive_table_tennis_match" />
                    <p className="Legend">Photo 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default PhotoGallery;