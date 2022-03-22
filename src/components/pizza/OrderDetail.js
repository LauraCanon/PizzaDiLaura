import "./orderDetail.css";
import useFetch from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router";

function OrderDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: orders,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/orders/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/orders/" + orders.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  console.log(orders);

  return (
    <div className="detail-container">
      <div className="order-list">
        {orders && (
          <article>
            <h2 className="order-name">
              {orders.name} {orders.lastName}
            </h2>

            <h4 className="order-include">Your pizza includes:</h4>
            {orders &&
              orders.order.map((ord) => (
                <div>
                  <p>
                    {ord.ingredient} - $ {ord.price}
                  </p>
                </div>
              ))}
            <h3 className="order-price">Total: $ {orders.total}</h3>
            <button className="order-button" onClick={handleDelete}>
              Delete
            </button>
          </article>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;
