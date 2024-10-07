const CelsiusToFahrenheit = ({ celsius }) => {
  const fahrenheit = celsius * 1.8 + 32;
  return (
    <h2>
      La conversión de ºC a ºF es: {celsius}ºC = {fahrenheit}ºF
    </h2>
  );
};
export default CelsiusToFahrenheit;
