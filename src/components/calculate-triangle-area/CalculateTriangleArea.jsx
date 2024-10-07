const CalculateTriangleArea = ({ base, height }) => {
  const area = (base * height) / 2;
  return <h2>El área del triángulo es: {area}</h2>;
};
export default CalculateTriangleArea;
