const WriteMessage = ({ name, material, size, note }) => {
  return (
    <h2>
      {name} ha pedido una caja de {material} de tamaño {size}. {note}.
    </h2>
  );
};

export default WriteMessage;
