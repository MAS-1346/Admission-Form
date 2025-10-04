import React from "react";
import './form.css';

const Form = () => {
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
                            <input className="input" type="text" placeholder=""></input>
                            <label>First name</label>
                        </div>
                        <div className="box">

                            <input className="input" type="text" placeholder=""></input>
                            <label>Middle name</label>
                        </div>
                        <div className="box">

                            <input className="input" type="text" placeholder=""></input>
                            <label>Last name</label>
                        </div>
                    </div>
                </div>
                <div className=" section">
                    <h3>Birth Date</h3>
                    <div className="boxes">
                        <div className="box">
                            <select className="input">
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
                            <select className="input">
                                <option >Please select a day</option>
                                {Array.from({ length: 31 }, (days, index) => (
                                    <option key={index} value={index + 1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                            <label>Month</label>
                        </div>
                        <div className="box">
                            <select className="input">
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
                            <label><input type="radio" name="gender" />Male</label>
                            <label><input type="radio" name="gender" />Female</label>
                        </div>
                    </div>
                    <div className="city">
                        <h3>Of which country are you a citizen?</h3>
                        <select className="input">
                            <option>Select your country</option>
                            <option>Pakistan</option>
                            <option>India</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Australia</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>China</option>
                            <option>Japan</option>
                            <option>Saudi Arabia</option>
                            <option>United Arab Emirates</option>
                        </select>
                    </div>
                </div>
                <div className="row-section">
                    <div>
                        <h3>Phone</h3>
                        <input className="contact-input" type="text" placeholder=" (000) 000-000"></input>
                    </div>
                    <div>
                        <h3>Email-Address</h3>
                        <input className="contact-input" type="text" placeholder=" ex: myname@example.com"></input>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <h3>Mailing Address</h3>
                        <input className="address-input" type="text"></input>
                        <label>Street Address</label>
                        <input className="address-input" type="text"></input>
                        <label>Street Address Line 2</label>
                    </div>

                </div>
                <div className="row-section">
                    <div>
                        <input className="contact-input" type="text"></input>
                        <label>City</label>
                    </div>
                    <div>
                        <input className="contact-input" type="text"></input>
                        <label>State/Province</label>
                    </div>
                </div>
                <div className="row-section">
                    <div className="box">
                        <input className="address-input" type="text"></input>
                        <label>Postal / Zip Code</label>
                    </div>
                </div>
                <div className="row-section">
                    <div>
                        <h3>Emergency Contact</h3>
                        <div className="row">
                            <div className="box">
                                <input className="emergency-input" type="text" placeholder=""></input>
                                <label>First name</label>
                            </div>
                            <div className="box">
                                <input className="emergency-input" type="text" placeholder=""></input>
                                <label>Last name</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Relationship</h3>
                        <input className="contact-input" type="text"></input>
                    </div>
                </div>
                <div className="row-section">
                    <div>
                        <h3>Email-Address</h3>
                        <input className="contact-input" type="text" placeholder=" ex: myname@example.com"></input>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <input className="contact-input" type="text" placeholder=" (000) 000-000"></input>
                    </div>
                </div>
                <div className="row-section">
                    <div className="gender">
                        <h3>Do you speak any languages other than English?</h3>
                        <div className="radios">
                            <label><input type="radio" />Yes</label>
                            <label><input type="radio" />No</label>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="nxt">
                    <button>Next</button>
                </div>
            </form>
        </>
    )
}

export default Form;
