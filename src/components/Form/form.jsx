import React from "react";
import { useState } from "react";
import './form.css';

const Form = () => {
    const [data, setData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        month: "",
        day: "",
        year: "",
        gender: "",
        country: "",
        phone: "",
        email: "",
        maddress: "",
        maddress2: "",
        city: "",
        state: "",
        zip: "",
        emergencyFirstName: "",
        emergencyLastName: "",
        relationship: "",
        emergencyEmail: "",
        emergencyPhone: "",
        otherLanguages: "",
        langlist: ""
    });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", data);
    };
    //(e) = Event
    //...data = spread operator
    //[e.target.name] = dynamic key
    //e.target.value = value of the input field
    // setData = function to update the state
    // useState = hook to manage state in functional components
    // initial state = object with empty strings for each field
    // handleChange = function to handle input changes
    // onChange = event listener for input fields
    // return statement to render the form
    return (
        <>
            <form>
                <div className="header">
                    <h1>College Admissions Form</h1>
                    <h3>Enter your admission information below</h3>
                </div>
                <div className="line"></div>
                <div className="section">
                    <h3>Name</h3>
                    <div className="boxes">
                        <div className="box">
                            <input className="input" onChange={handleChange} name="firstName" type="text" placeholder=""></input>
                            <label>First name</label>
                        </div>
                        <div className="box">

                            <input className="input" onChange={handleChange} type="text" name="middleName" placeholder=""></input>
                            <label>Middle name</label>
                        </div>
                        <div className="box">

                            <input className="input" onChange={handleChange} type="text" name="lastName" placeholder=""></input>
                            <label>Last name</label>
                        </div>
                    </div>
                </div>
                <div className=" section">
                    <h3>Birth Date</h3>
                    <div className="boxes">
                        <div className="box">
                            <select className="input" onChange={handleChange} name="month">
                                <option >Please select a month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <label>Month</label>
                        </div>
                        <div className="box">
                            <select className="input" onChange={handleChange} name="day">
                                <option >Please select a day</option>
                                {Array.from({ length: 31 }, (days, index) => (
                                    <option key={index} value={index + 1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                            <label>Day</label>
                        </div>
                        <div className="box">
                            <select className="input" onChange={handleChange} name="year">
                                <option >Please select a year</option>
                                {Array.from({ length: 2025 - 1920 + 1 }, (_, index) =>
                                (
                                    <option key={index} value={2025 - index}>
                                        {2025 - index}
                                    </option>
                                ))}
                            </select>
                            <label>Year</label>
                        </div>
                    </div>
                </div>
                <div className="row-section">
                    <div className="gender">
                        <h3>Gender</h3>
                        <div className="radios">
                            <label><input onClick={handleChange} type="radio" name="gender" />Male</label>
                            <label><input onClick={handleChange} type="radio" name="gender" />Female</label>
                        </div>
                    </div>
                    <div className="city">
                        <h3>Of which country are you a citizen?</h3>
                        <select className="input" onChange={handleChange} name="country">
                            <option>Select your country</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Antigua and Barbuda</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>Belarus</option>
                            <option>Belgium</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bhutan</option>
                            <option>Bolivia</option>
                            <option>Bosnia and Herzegovina</option>
                            <option>Botswana</option>
                            <option>Brazil</option>
                            <option>Brunei</option>
                            <option>Bulgaria</option>
                            <option>Burkina Faso</option>
                            <option>Burundi</option>
                            <option>Cabo Verde</option>
                            <option>Cambodia</option>
                            <option>Cameroon</option>
                            <option>Canada</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Chile</option>
                            <option>China</option>
                            <option>Colombia</option>
                            <option>Comoros</option>
                            <option>Congo (Congo-Brazzaville)</option>
                            <option>Costa Rica</option>
                            <option>Croatia</option>
                            <option>Cuba</option>
                            <option>Cyprus</option>
                            <option>Czech Republic</option>
                            <option>Democratic Republic of the Congo</option>
                            <option>Denmark</option>
                            <option>Djibouti</option>
                            <option>Dominica</option>
                            <option>Dominican Republic</option>
                            <option>Ecuador</option>
                            <option>Egypt</option>
                            <option>El Salvador</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Estonia</option>
                            <option>Eswatini</option>
                            <option>Ethiopia</option>
                            <option>Fiji</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Georgia</option>
                            <option>Germany</option>
                            <option>Ghana</option>
                            <option>Greece</option>
                            <option>Grenada</option>
                            <option>Guatemala</option>
                            <option>Guinea</option>
                            <option>Guinea-Bissau</option>
                            <option>Guyana</option>
                            <option>Haiti</option>
                            <option>Honduras</option>
                            <option>Hungary</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Ireland</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Jamaica</option>
                            <option>Japan</option>
                            <option>Jordan</option>
                            <option>Kazakhstan</option>
                            <option>Kenya</option>
                            <option>Kiribati</option>
                            <option>Kuwait</option>
                            <option>Kyrgyzstan</option>
                            <option>Laos</option>
                            <option>Latvia</option>
                            <option>Lebanon</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Liechtenstein</option>
                            <option>Lithuania</option>
                            <option>Luxembourg</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Mali</option>
                            <option>Malta</option>
                            <option>Marshall Islands</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Mexico</option>
                            <option>Micronesia</option>
                            <option>Moldova</option>
                            <option>Monaco</option>
                            <option>Mongolia</option>
                            <option>Montenegro</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Myanmar</option>
                            <option>Namibia</option>
                            <option>Nauru</option>
                            <option>Nepal</option>
                            <option>Netherlands</option>
                            <option>New Zealand</option>
                            <option>Nicaragua</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>North Korea</option>
                            <option>North Macedonia</option>
                            <option>Norway</option>
                            <option>Oman</option>
                            <option>Pakistan</option>
                            <option>Palau</option>
                            <option>Palestine State</option>
                            <option>Panama</option>
                            <option>Papua New Guinea</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                            <option>Philippines</option>
                            <option>Poland</option>
                            <option>Portugal</option>
                            <option>Qatar</option>
                            <option>Romania</option>
                            <option>Russia</option>
                            <option>Rwanda</option>
                            <option>Saint Kitts and Nevis</option>
                            <option>Saint Lucia</option>
                            <option>Saint Vincent and the Grenadines</option>
                            <option>Samoa</option>
                            <option>San Marino</option>
                            <option>Sao Tome and Principe</option>
                            <option>Saudi Arabia</option>
                            <option>Senegal</option>
                            <option>Serbia</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Singapore</option>
                            <option>Slovakia</option>
                            <option>Slovenia</option>
                            <option>Solomon Islands</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Korea</option>
                            <option>South Sudan</option>
                            <option>Spain</option>
                            <option>Sri Lanka</option>
                            <option>Sudan</option>
                            <option>Suriname</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Syria</option>
                            <option>Tajikistan</option>
                            <option>Tanzania</option>
                            <option>Thailand</option>
                            <option>Timor-Leste</option>
                            <option>Togo</option>
                            <option>Tonga</option>
                            <option>Trinidad and Tobago</option>
                            <option>Tunisia</option>
                            <option>Turkey</option>
                            <option>Turkmenistan</option>
                            <option>Tuvalu</option>
                            <option>Uganda</option>
                            <option>Ukraine</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Uruguay</option>
                            <option>Uzbekistan</option>
                            <option>Vanuatu</option>
                            <option>Vatican City</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Yemen</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>

                        </select>
                    </div>
                </div>
                <div className="row-section">
                    <div>
                        <h3>Phone</h3>
                        <input className="contact-input" onChange={handleChange} name="phone" type="text" placeholder=" (000) 000-000"></input>
                    </div>
                    <div>
                        <h3>Email-Address</h3>
                        <input className="contact-input" onChange={handleChange} name="email" type="text" placeholder=" ex: myname@example.com"></input>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <h3>Mailing Address</h3>
                        <input className="address-input" onChange={handleChange} name="maddress" type="text"></input>
                        <label>Street Address</label>
                        <input className="address-input" onChange={handleChange} name="maddress2" type="text"></input>
                        <label>Street Address Line 2</label>
                    </div>

                </div>
                <div className="row-section">
                    <div>
                        <input className="contact-input" onChange={handleChange} name="city" type="text"></input>
                        <label>City</label>
                    </div>
                    <div>
                        <input className="contact-input" onChange={handleChange} name="state" type="text"></input>
                        <label>State/Province</label>
                    </div>
                </div>
                <div className="row-section">
                    <div className="box">
                        <input className="address-input" onChange={handleChange} name="zip" type="text"></input>
                        <label>Postal / Zip Code</label>
                    </div>
                </div>
                <div className="row-section">
                    <div>
                        <h3>Emergency Contact</h3>
                        <div className="row">
                            <div className="box">
                                <input className="emergency-input" onChange={handleChange} name="emergencyFirstName" type="text" placeholder=""></input>
                                <label>First name</label>
                            </div>
                            <div className="box">
                                <input className="emergency-input" onChange={handleChange} name="emergencyLastName" type="text" placeholder=""></input>
                                <label>Last name</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Relationship</h3>
                        <input className="contact-input" onChange={handleChange} name="relationship" type="text"></input>
                    </div>
                </div>
                <div className="row-section">
                    <div>
                        <h3>Email-Address</h3>
                        <input className="contact-input" onChange={handleChange} name="emergencyEmail" type="text" placeholder=" ex: myname@example.com"></input>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <input className="contact-input" onChange={handleChange} name="emergencyPhone" type="text" placeholder=" (000) 000-000"></input>
                    </div>
                </div>
                <div className="row-section">
                    <div className="gender">
                        <h3>Do you speak any languages other than English?</h3>
                        <div className="radios">
                            <label><input type="radio" onClick={handleChange} name="otherLanguages" />Yes</label>
                            <label><input type="radio" />No</label>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h3>Please list them</h3>
                    <input className="lang" onChange={handleChange} name="langlist" ></input>
                </div>
                <div className="line"></div>
                <div className="nxt">
                    <button onClick={handleSubmit} >Next</button>
                </div>

            </form>
        </>
    )
}

export default Form;
