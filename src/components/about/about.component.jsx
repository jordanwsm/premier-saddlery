import React from 'react';
import './about.style.css';
import ImageThree from '../../assets/index.jpg';

const About = () => {
    return (
        <div id="about">
            <div class="card">
            
                <div class="card-body">
                <img src={ImageThree} width="200" height="100"/>
                <p></p>
                    <h5 class="card-title">Welcome to Premier Saddlery</h5>
                    <p class="card-text">Premier Saddlery is situated 5 minutes from Armagh City and has customer service at it's core.</p>



                </div>
            </div>

            <div class="card">
            
                <div class="card-body">
                    <h5 class="card-title">What we offer</h5>
                    <p class="card-text">Premier Saddlery stocks a wide range of products to cater for all your equestrian needs. We supply the best quality in saddlery, riding wear, horse clothing, stable equipment, horse feed, supplements/horse care and much more. We also offer an on site saddlery repair service which affords high standards without delaying the return of your tack. The customer is at the centre of all we do.</p>


                </div>
            </div>


            <div class="card">
        
                <div class="card-body">
                    <h5 class="card-title">General Information</h5>
                    <p class="card-text">Premier Saddlery stocks a wide range of products to cater for all your equestrian needs. We supply the best quality in saddlery, riding wear, horse clothing, stable equipment, horse feed, supplements/horse care and much more. We also offer an on site saddlery repair service which affords high standards without delaying the return of your tack. The customer is at the centre of all we do.</p>

                </div>
            </div>

        </div>



    )
}
export default About;