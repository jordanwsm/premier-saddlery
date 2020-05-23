import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import {  } from "@fortawesome/free-brands-svg-icons"
import './contact.style.css';


const Contact = () => {

    return (



        <div id="contact">


            <div class="card">

                <div class="card-body">
                    <h5 class="card-title">Standard Opening Hours</h5>
                    <p class="card-text"> Due to Covid-19 the shop will be closing at 4.00pm each day</p>
                    <p class="card-text"> Monday - 9.00am 6.00pm </p>
                    <p class="card-text"> Tuesday - 9.00am 6.00pm </p>
                    <p class="card-text"> Wednesday - 9.00am 6.00pm </p>
                    <p class="card-text"> Thursday - 9.00am 6.00pm </p>
                    <p class="card-text"> Friday - 9.00am 6.00pm </p>
                    <p class="card-text"> Saturday - 9.00am 4.00pm </p>
                    <p class="card-text"> Sunday - Closed </p>


                </div>
            </div>


            <div class="card">

                <div class="card-body">
                    <h5 class="card-title">Contact Information</h5>
                    <p class="card-text"> Email - premiersaddlery@gmail.com </p>
                    <p class="card-text"> Landline - 028 3752 5492</p>
                    <p class="card-text"> Address - 17 Terraskane Rd, Armagh, BT61 8BJ</p>
                    <a class="card-text" href="https://www.facebook.com/premiersaddlery"> <FontAwesomeIcon icon={faFacebook}/> Facebook - Premier Saddlery</a>
                </div>
            </div>

            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=PREMIER%20SADDLery&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        </div>

        </div>
</div>


    )
}
export default Contact
