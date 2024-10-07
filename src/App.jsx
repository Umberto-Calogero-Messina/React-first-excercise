import Button from './components/button/Button';

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
      {/* Los componentes no puedes devolver más de 1 obj. La forma mas intuitiva è envolver todo en un Div con todas las cosas dentro. Pero como puedo hacer esto sin un div si no lo necesito? Con una etiqueta vacia <> </> que sirve para juntar las cosas pero no llega a HTML */}
    </>
  );
};

export default App;
