const FahrenheitToCelsius = ({ fahrenheit }) => {
  const celsius = (fahrenheit - 32) / 1.8;
  return (
    <h2>
      La conversión de ºC a ºF es: {fahrenheit}ºF = {celsius}ºC
    </h2>
  );
};
export default FahrenheitToCelsius;
