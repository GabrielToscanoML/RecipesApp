import React, { useEffect, useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  useEffect(() => {
    const SIX = 6;

    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    const emailCheck = emailRegex.test(user.email);
    const passCheck = user.password.length > SIX;

    if (emailCheck && passCheck) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user.email, user.password]);

  return (
    <>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        value={ user.email }
        onChange={ (e) => handleChange(e) }
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={ user.password }
        onChange={ (e) => handleChange(e) }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ disabled }
      >
        Enter
      </button>
    </>
  );
}

export default Login;
