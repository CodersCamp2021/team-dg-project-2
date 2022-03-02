import { useState } from 'react';

import SignUp from '../pages/SignUp';
import SignupSuccess from './SignupSucces';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return <>{!isSubmitted ? <SignUp submitForm={submitForm} /> : <SignupSuccess />}</>;
};

export default Form;
