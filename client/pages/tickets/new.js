import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
const NewTicket = () => {
  const [state, setState] = useState({
    title: "",
    price: "",
  });
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: state,
    onSuccess: () => Router.push("/"),
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onBlur = () => {
    const value = parseFloat(state.price);

    if (isNaN(value)) {
      return;
    }
    setState({ ...state, price: value.toFixed(2) });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={onChange}
            value={state.title}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            onBlur={onBlur}
            className="form-control"
            name="price"
            onChange={onChange}
            value={state.price}
          />
        </div>
        {errors}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default NewTicket;
