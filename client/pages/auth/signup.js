import { useState } from "react";
import useRequest from "../../hooks/use-request";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    body: { password, email },
    method: "post",
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
