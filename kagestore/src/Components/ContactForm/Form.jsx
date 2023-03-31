import { useState } from "react";

const Form = () => {
const [ firstname, setFirstname ] = useState("");
const [ subject, setSubject ] = useState("");
const [ email, setEmail ] = useState("");
const [ body, setBody ] = useState("");

const onFirstnameChange = (event) => {
    setFirstname(event.target.value);
}

const onSubjectChange = (event) => {
    setSubject(event.target.value);
}

const onEmailChange = (event) => {
    setEmail(event.target.value);
}

const onBodyChange = (event) => {
    setBody(event.target.value);
}

// // SUBMITTING FORM
//
// const onFormSubmit = (event) => {
//     event.preventDefault();
//     const body = {
//         firstname,
//         subject,
//         email,
//         body,
//     };
//     // Basic fetch example
//     fetch('http://www.example.com', {
//       method: 'POST',
//       body: JSON.stringify(body),
//     });
// };

    return (
        <section>
        <div>
        {/* <form onSubmit={onFormSubmit}> */}
            <form>
                <input 
                    value={firstname} 
                    placeholder="Subject" 
                    onChange={onSubjectChange}
                />
                <input 
                    value={subject} 
                    placeholder="First name" 
                    onChange={onFirstnameChange}
                />
                <input 
                    value={email} 
                    placeholder="Email address" 
                    onChange={onEmailChange}
                />
                <textarea
                    value={body} 
                    placeholder="Tell us about your problem" 
                    onChange={onBodyChange}
                />
                
   {/* REDUCING TEXT INPUTS TO A SINGLE FUNCTION */}

    {/* function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === 'first-name') {
      setFirstName(value);
    }
    if (event.target.name === 'last-name') {
      setLastName(value);
    }
    if (event.target.name === 'city') {
      setCity(value);
    }
  } */}
                <button>Submit</button>
            </form>
        </div>
        </section>
    )
};

export default Form;

// YUP: https://github.com/jquense/yup/blob/master/README.md

// FULL NAME (Minimum number of characters is 3, required)
// SUBJECT (Minimum number of characters is 3, required)
// EMAIL (Must be a valid email address, required)
// BODY (Minimum number of characters is 3, required)

// email regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/