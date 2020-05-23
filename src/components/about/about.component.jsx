import React from 'react';
import './about.style.css';
import ImageThree from '../../assets/index.jpg';
import ImageFour from '../../assets/saddle.JPG';
import ImageFive from '../../assets/rug.jpg';
import ImageSix from '../../assets/collar2.jpg';
import ImageSeven from '../../assets/worm_egg_count.jpg';
import ImageEight from '../../assets/sqp.jpg';
import ImageNine from '../../assets/redmills.png';
import ImageTen from '../../assets/gain-logo.png';
import ImageEleven from '../../assets/spillers.JPG';
import Image12 from '../../assets/blugrass.jpg';
import Image13 from '../../assets/baileys.jpg';






const About = () => {
    return (
        <div id="about">
            <div class="card">

                <div class="card-body">
                    <img src={ImageThree} width="200" height="100" />
                    <p></p>
                    <h5 class="card-title">Welcome to Premier Saddlery</h5>
                    <p class="card-text">Premier Saddlery is situated 5 minutes from Armagh City and has customer service at it's core.</p>



                </div>
            </div>

            <div class="card">

                <div class="card-body">
                    <h5 class="card-title">General Information</h5>
                    <p class="card-text">Premier Saddlery stocks a wide range of products to cater for all your equestrian needs. We supply the best quality in saddlery, riding wear, horse clothing, stable equipment, horse feed, supplements/horse care and much more. We also offer an on site saddlery repair service which affords high standards without delaying the return of your tack. The customer is at the centre of all we do.</p>


                </div>
            </div>

            <div id="accordion">

                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                            On Site SQP for horse wormers   </a>
                    </div>
                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                        30 minutes Our in-store J-SQP is qualified to tailor worming programmes for your horse and prescribe appropriate wormers where needed - Price Varies     </div>
                        <img src={ImageEight} width="350" height="250" />
                        <p></p>
                    </div>
                </div>




          


  

                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseTwo">
                            Saddlery Repair</a>
                    </div>
                    <div id="collapseTwo" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                        30 minutes - On site saddlery repairs carried out - Price Varies</div>
                        <img src={ImageFour} width="400" height="250" />
                        <p></p>
                    </div>
                </div>





        

                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseThree">
                            Rug Wash Repair</a>
                    </div>
                    <div id="collapseThree" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                        30 minutes - Comprehensive professional service with minimum turnaround - £10</div>
                        <img src={ImageFive} width="400" height="250" />
                        <p></p>
                    </div>
                </div>

        

                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseFour">
                            Faecal Work Egg Counts </a>
                    </div>
                    <div id="collapseFour" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                        30 minutes - Worm egg counts available to purchase in store. Professional and speedy service to determine if your horse needs wormed or not! Save money and reduce resistance build up! Only £9.99
                            </div>
                            <img src={ImageSeven} width="400" height="250" />
                        <p></p>
                    </div>
                </div>


                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseFive">
                            Feed Stock List </a>
                    </div>
                    <div id="collapseFive" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                      Red Mills | Gain Horse Feeds | Spillers | Bluegrass | Baileys Horse Feed
                          

                            
                            
            </div>

            <div class = "Row">

            <img src={ImageNine} width="325" height="250" />
            <img src={ImageTen} width="325" height="250" />
            <img src={ImageEleven} width="375" height="250" />
            <img src={Image12} width="375" height="250" />
            <img src={Image13} width="325" height="250" />


            </div>
                    </div>
                </div>




            </div>

            <div id="accordion">

<div class="card">
    <div class="card-header">
        <a class="card-link" data-toggle="collapse" href="#collapseSix">
            Supplements </a>
    </div>
    <div id="collapseSix" class="collapse show" data-parent="#accordion">
        <div class="card-body">
      NAF | Horse First | EquireAmerian
            
</div>

    </div>
</div>




</div>


        </div>




    )
}
export default About;