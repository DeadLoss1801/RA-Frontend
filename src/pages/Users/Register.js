import React, { useState } from 'react'
import "./Register.css"
import {Link} from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState();
    const [country, setCountry] = useState('India');
    const [state, setState] = useState('Delhi');
    const [profession, setProfession] = useState();
    const [tnc, setTnc] = useState( false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, email, dob, age, gender, country, state, profession};
        console.log(data);

        const fullNameField = document.getElementById("fullname");
        const nameError = document.getElementById("nameError");
        var val = /^[A-Za-z ]{1,}$/;
        var filter = 0;
        if (!val.test(document.getElementById("fullname").value)) {
            
            nameError.classList.add("visible");
            fullNameField.classList.add("invalid");
            nameError.setAttribute('aria-hidden', false);
            nameError.setAttribute('aria-invalid', true);
            filter = 1;
        }

        if(filter === 0) {
            nameError.classList.remove("visible");
            fullNameField.classList.remove("invalid");
            nameError.setAttribute('aria-hidden', true);
            nameError.setAttribute('aria-invalid', false);
            if(tnc === false) {
                alert('Please check the terms and conditions box');
            }
            else {
                // fetch('https://summerinternshipproject.pythonanywhere.com/demographic/', {
                //         method: 'POST',
                //         headers: { "Content-Type": "application/json" }, 
                //         body: JSON.stringify(data)
                //     }).then(() => {
                //         console.log('Registered');
                //     })

                alert('Registered successfully');
            }
        }
    }

    const checkboxHandler = () => {
        setTnc(!tnc);
    }

    var calculated_age = 0;

    function calculate_age() {
        var birth_date = new Date(document.getElementById("birth_date").value);
        var birth_date_day = birth_date.getDate();
        var birth_date_month = birth_date.getMonth();
        var birth_date_year = birth_date.getFullYear();

        var today_date = new Date();
        var today_day = today_date.getDate();
        var today_month = today_date.getMonth();
        var today_year = today_date.getFullYear();

        

        if(today_month > birth_date_month) {
            calculated_age = today_year - birth_date_year;
        }
        else if(today_month === birth_date_month)
        {
           if(today_day >= birth_date_day) {
            calculated_age = today_year - birth_date_year;
           }
           else {
            calculated_age = today_year - birth_date_year - 1;
           }
        }
        else {
            calculated_age = today_year - birth_date_year - 1;
        }
        //console.log(calculated_age);
        //var output_value = calculated_age;
        document.getElementById("calculated_age").value = calculated_age;
        //age.value = calculated_age;
    }

    const handleClick = event => {
        event.preventDefault();
        
        calculate_age();
        //console.log('old value: ', age);
        setAge(calculated_age);
      };

  return (
    <div className='create'>
        
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
            <label>Name</label>
            <input
                type="text"
                placeholder="Your Full name"
                required
                value={name}
                //pattern="^[A-Za-z ]{1,}$"
                id="fullname"
                onChange={(e) => setName(e.target.value)}
            />
            <span role="alert" id="nameError" aria-hidden="true">*Name should be in characters only and shouldn't include any special character!</span>
            <label>Email</label>
            <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <label>Date of Birth</label>
            <input
                type="date"
                id="birth_date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />
            <label>Age</label>
            <input
                type="text"      
                placeholder="Your age"     
                required
                id="calculated_age"
                onClick={handleClick}
                value={age}
                readOnly
            />
            <label>Gender</label>
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}                
            >
                <option value="-Select-" selected disabled>--Select--</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
            </select>
            <label>Country</label>
            <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}          
            >
                <option value="-Select-" selected disabled>--Select--</option>
                <option value="india">India</option>
                <option value="america">America</option> 
            </select>
            <label>State</label>
            <select
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="delhi">Delhi</option>
                <option value="newyork">New York</option>
            </select>
            <label>Role</label>
            <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}            
            >
                <option value="----Select----" selected disabled>--Select--</option>
                <option value="1">Student</option>
                <option value="3">Professor</option>
                <option value="2">Industrialist</option>
                
            </select>
            
            <label id="Tnc"><input type="checkbox" id="cbox"
                onChange={checkboxHandler}
            />By using this form you agree with the storage and handling of your data by this website in accordance with our Privacy Policy.</label>
            <Link to={"/"}><button >Cancel</button></Link>
            <Link to={"/expertise"}><button >Submit</button></Link>
        </form>
    </div>
  );

}

export default Register;