const TotalPrice = ({ price }) => {
  const iva = 0.21;
  const totalPrice = price + price * iva;
  return <h2>El precio total con IVA es: {totalPrice.toFixed(2)}€</h2>;
};

export default TotalPrice;
