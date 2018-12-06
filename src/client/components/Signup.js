import React from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import { Field } from 'redux-form';

const styles = {
  Signup: {
    width: '90%',
    margin: '0 auto',
    paddingTop: '60px'
  },
  submit: {
    marginTop: '14px'
  },
  TextField: {
    margin: '3.5px 0'
  }
};

const renderTextfield = (props) => {
  const {
    label,
    className,
    input,
    meta: { error }
  } = props;

  return (
    <TextField
      {...input}
      className={className}
      type="text"
      label={error || label}
      error={!!error}
      fullWidth
    />
  );
};

const Signup = ({ classes, handleSubmit }) => (
  <div className={classes.Signup}>
    <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          label="Username"
          className={classes.TextField}
          name="username"
          component={renderTextfield}
        />
      </div>
      <div>
        <Field
          label="Password"
          className={classes.TextField}
          name="password"
          component={renderTextfield}
        />
      </div>
      <div>
        <Field
          label="Email"
          className={classes.TextField}
          name="email"
          component={renderTextfield}
        />
      </div>
      <Button
        className={classes.submit}
        color="primary"
        size="medium"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  </div>
);

export default withStyles(styles)(Signup);
