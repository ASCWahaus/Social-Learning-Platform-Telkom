import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import Step1 from "../component/FormRegister/Step1";
import Step2 from "../component/FormRegister/Step2";
import Submit from "../component/FormRegister/Submit";


const steps = [
  { id: "Step1" },
  { id: "Step2" },
  { id: "submit" }
];

const initialState = {
  name : '',
  email : '',
  password : '',
  position : '',
  company: '',
  biography:''
}

const MultiStepForm = () => {
  const [formData, setFormData] = useForm(initialState);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setFormData, navigation };

  switch (id) {
    case "Step1":
      return <Step1 {...props} />;
    case "Step2":
      return <Step2 {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
