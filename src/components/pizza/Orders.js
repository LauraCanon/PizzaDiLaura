import "./orders.css";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Orders() {
  const {
    data: orders,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/orders");

  return (
    <div className="orders-list">
      <h1 className="order-title">Orders Historial</h1>
      {isLoading && <div className="order-load">Loading...</div>}
      {error && <div className="order-error">{error}</div>}
      {orders &&
        orders.map((order) => (
          <div className="order-preview" key={order.id}>
            {/* To access to the detail, I need to wrap everything into a Link */}
            {/* Then I need to specify which is the path - in this case, I'm gonna access through the id */}
            <Link to={`/historial/${order.id}`}>
              <h2>
                {order.name} {order.lastName}
              </h2>
              <h3>Phone: {order.phone}</h3>
              <h3>Ordered: {order.date}</h3>
              <h4>Total: $ {order.total}</h4>

              {/* I define a callback f to be able to pass an argument */}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Orders;
