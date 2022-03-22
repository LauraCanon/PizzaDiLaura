import "./clientForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormClient({ ings }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = ings;
    const total = order
      .map((ing) => ing.price)
      .reduce((prev, curr) => prev + curr, 0);
    const formOrder = { name, lastName, phone, date, total, order };
    console.log("Your order", order);
    console.log("Your info", formOrder);
    console.log("Your total", total);

    setIsLoading(true);
    fetch("http://localhost:8000/orders", {
      method: "POST",
      //This is telling the server, what kind of content I'm sending with this request (json data)
      headers: { "Content-type": "application/json" },
      // The body is the actual data I'm sending with this request
      body: JSON.stringify(formOrder),
      //Since this is assync, I need to return a promise that fires a function when this is complete
    }).then(() => {
      console.log("New order added");
      setIsLoading(false);
    });
    //Use useNavigate hook to redirect (Im gonna redirect the user to the homepage)
    navigate("/");
  };

  return (
    <div className="new-order">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Last Name: </label>
        <input
          type="text"
          required
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label>Phone:</label>
        <input
          type="tel"
          required
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* {ings.map((ing) => (
          <h3>{ing.ingredient === "Chicken" ? "Pizza Ranch" : ""}</h3>
        ))} */}

        <div>
          <h3>
            Total: ${" "}
            {ings
              .map((ing) => ing.price)
              .reduce((prev, curr) => prev + curr, 0)}
          </h3>
        </div>
        {!isLoading && <button>Add Order</button>}
        {isLoading && <button disabled>Adding Order...</button>}
      </form>
    </div>
  );
}

export default FormClient;
