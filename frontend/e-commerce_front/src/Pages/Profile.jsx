import React from "react";
import './CSS/Profile.css';
import ellipse_12x from '../Components/Assets/ellipse-1@2x.png';
import vector10 from '../Components/Assets/vector10.svg';
import leftnormal2x from '../Components/Assets/leftnormal@2x.png';

const Profile = () => {
    return (

        <div class="profile-page_modified">

            <div class="contain-prof">
                <div class="profile-page-inner_modified">
                    <div class="group-child_modified"></div>
                </div>
                <div class="ellipse-parent_modified">
                    <img class="group-item_modified" alt="" src={ellipse_12x} />

                    <button class="ellipse-group_modified">
                        <div class="group-inner_modified"></div>
                        <img class="vector-icon_modified" alt="" src={vector10} />
                    </button>
                </div>
                <div class="first-name-parent_modified">
                    <div class="first-name_modified">First Name</div>
                    <input class="rectangle-input_modified" placeholder="Mohammed" type="text" />
                </div>
                <div class="city-parent_modified">
                    <div class="first-name_modified">City</div>
                    <input class="rectangle-input_modified" placeholder="Cairo" type="text" />
                </div>
                <div class="username-parent_modified">
                    <div class="first-name_modified">UserName</div>
                    <input class="group-child2_modified" placeholder="Mohamed344" type="text" />
                </div>
                <div class="email-parent_modified">
                    <div class="first-name_modified">Email</div>
                    <input
                        class="group-child2_modified"
                        placeholder="richadmoe@hotmail.com"
                        type="email"
                    />
                </div>
                <div class="contact-number-parent_modified">
                    <div class="contact-number_modified">Contact Number</div>
                    <input class="group-child2_modified" placeholder="01176433743" type="number" />
                </div>
                <div class="password-parent_modified">
                    <div class="contact-number_modified">Password</div>
                    <input class="group-child2_modified" placeholder="kj1234!" type="password" />
                </div>
                <div class="last-name-parent_modified">
                    <div class="first-name_modified">Last Name</div>
                    <input class="rectangle-input_modified" placeholder="Hossam" type="text" />
                </div>
                <div class="state-parent_modified">
                    <div class="first-name_modified">State</div>
                    <input class="rectangle-input_modified" placeholder="Egypt" type="text" />
                </div>
                <img
                    class="chevron-left-normal-icon_modified"
                    alt=""
                    src={leftnormal2x}
                />

                <img
                    class="chevron-left-normal-icon1_modified"
                    alt=""
                    src={leftnormal2x}
                />

                <div class="rectangle-parent_modified">
                    <button class="rectangle-button_modified"></button>
                    <div class="save-changes_modified">Save Changes</div>
                </div>
            </div>

        </div>
    )
}

export default Profile;