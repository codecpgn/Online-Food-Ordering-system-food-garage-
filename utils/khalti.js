import KhaltiCheckout from "khalti-checkout-web";
import config from "./Khalticonfig";

export default function Khalti() {
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: 100000 })}
        style={buttonStyles}
      >
        Pay Via Khalti
      </button>
    </div>
  );
}

