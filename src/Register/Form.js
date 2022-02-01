import React, {useState} from 'react';
import SignupForm from './SignupForm';
import SignupSuccess from './SignupSucces';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        {!isSubmitted ? (<SignupForm submitForm=
        {submitForm} />) : <SignupSuccess />}
    </>
  );
};

export default Form;
