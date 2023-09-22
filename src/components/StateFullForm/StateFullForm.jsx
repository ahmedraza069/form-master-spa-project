import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChangeName}
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        <br />
        <input
          onChange={handleOnChangeEmail}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          onChange={handleOnChangePassword}
          type="password"
          name="Password"
          placeholder="Enter your password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateFullForm;
