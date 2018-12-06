import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Signup from '../components/Signup';
import { createUser } from '../api/signup';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['username', 'password', 'email'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = values => sleep(1000).then(() => {
  // simulate server latency
  if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
    // eslint-disable-next-line no-throw-literal
    throw { email: 'Email already Exists' };
  }
});

const onSubmit = (values) => {
  const res = createUser({ ...values });
  console.log(res);
};

class SignupContainer extends Component {
  state = {};

  render() {
    const { handleSubmit } = this.props;

    return <Signup handleSubmit={handleSubmit} />;
  }
}

export default reduxForm({
  form: 'SignupContainer',
  validate,
  asyncValidate,
  onSubmit
})(SignupContainer);
