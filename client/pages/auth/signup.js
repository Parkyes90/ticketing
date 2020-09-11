import { useState } from "react";
import Router from "next/router";

import useRequest from "../../hooks/use-request";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    body: { password, email },
    method: "post",
    onSuccess() {
      Router.push("/").then();
    },
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };
  console.log(errors);
  return (
    <form action="" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      {errors}

      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;
