import { useState } from "react";
import { userSchema } from "../../Validation/ContactValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const Form = () => {
    const { handleSubmit, register, formState: { errors }, } = useForm(
    //     {
    //     resolver: yupResolver(userSchema)
    // }
    );

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
const onFormSubmit = async (data) => {
    // data.preventDefault();
    let bodyContent = {
        firstname,
        subject,
        email,
        body
    };
    console.log(bodyContent);
    const isValid = await userSchema.isValid(bodyContent);
    console.log(isValid);
    // Basic fetch example
    // fetch('http://www.example.com', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    // });
};

let errorMessage = "";

    return (
        <section>
        <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
                <input 
                   onChange={onFirstnameChange}
                    type="text"
                    name="firstName"
                    value={firstname} 
                    placeholder="First name"
                    register={{...register('firstname')}}
                    // errorMessage={errors.firstName?.message}
                />
                <input 
                    onChange={onSubjectChange}
                   type="text"
                    name="subject"
                    value={subject} 
                    placeholder="Subject" 
                    register={{...register('subject')}}
                    // errorMessage={errors.subject?.message}
                />
                <input 
                    onChange={onEmailChange}
                    type="text"
                    name="email"
                    value={email} 
                    placeholder="Email address" 
                    register={{...register('email')}}
                    // errorMessage={errors.email?.message}
                />
                <textarea
                    onChange={onBodyChange}
                    name="body"
                    value={body} 
                    placeholder="Tell us about your problem" 
                    register={{...register('body')}}
                    // errorMessage={errors.body?.message}
                />
                <button>Submit</button>
            </form>
        </div>
        </section>
    )
};

export default Form;

// YUP: https://github.com/jquense/yup/blob/master/README.md