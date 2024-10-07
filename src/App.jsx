import Button from './components/button/Button';
import SayHello from './components/say-hello/SayHello';
import CalculateSquareArea from './components/calculate-square-area/CalculateSquareArea';
import CalculateTriangleArea from './components/calculate-triangle-area/CalculateTriangleArea';
import CalculateCircleArea from './components/calculate-circle-area/CalculateCircleArea';
import CelsiusToFahrenheit from './components/celsius-to-fahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheit-to-celsius/FahrenheitToCelsius';
import TotalPrice from './components/total-price/TotalPrice';
import WriteMessage from './components/write-message/WriteMessage';

const App = () => {
  return (
    <>
      {/* Cuando uso uno o el otro. 
          El primero cuando mando un props y tengo que llamar a propriedades,
          el segundo es un children y en lugar de llamar la variable props = text, llamo a children para pintar un texto directamente que quiero poner.
      
      */}
      {/* <Button text='Click Me' /> */}
      <Button>Click Me</Button>
      <Button>Acept</Button>
      <Button>Cancel</Button>
      {/* Como enviar datos: quitando los string toda la información se manda con {} */}
      <Button name='David' number={34} array={[1, 2, 3, 4, 5]} obj={{ a: 1, b: 2 }} bool={true}>
        Datos
      </Button>
      {/* - Crea un componente llamado sayHello que reciba un nombre por parámetro y devuelva un h2 que diga "hola [nombre]". */}
      <SayHello name='Lucas'></SayHello>
      {/* - Crea un componente llamado calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado y devuelva un h2 con el resultado. */}
      <CalculateSquareArea side={6}></CalculateSquareArea>
      {/* - Crea un componente llamado calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado y devuelva un h2 con el resultado. */}
      <CalculateTriangleArea base={10} height={5}></CalculateTriangleArea>
      {/* - Crea un componente llamado calculateCircleArea que calcule el área de un círculo pasándole el radio y devuelva un h2 con el resultado. */}
      <CalculateCircleArea radius={10}></CalculateCircleArea>
      {/* - Crea un componente llamado celsiusToFahrenheit que reciba un número de grados celsius, los convierta a fahrenheit y devuelva un h2 con el resultado. La formula es ºF = ºC x 1.8 + 32. */}
      <CelsiusToFahrenheit celsius={20}></CelsiusToFahrenheit>
      {/* - Crea el componente inverso llamado fahrenheitToCelsius y devuelva un h2 con el resultado. ºC = (ºF - 32) / 1,8. */}
      <FahrenheitToCelsius price={68}></FahrenheitToCelsius>
      {/* - Crea un componente totalPrice que reciba un precio, le sume el IVA del 21% y devuelva un h2 con el resultado. */}
      <TotalPrice price={308}></TotalPrice>

      {/* - Crea un componente llamado writeMessage que reciba "name, material, size y note" y devuelva un h2 con el texto. "[name] ha pedido una caja de [material] de tamaño [size]. [note]. */}
      <WriteMessage name='Lucas' material='madera' size='20cm' note='Gracias'></WriteMessage>
    </>
  );
};

export default App;
