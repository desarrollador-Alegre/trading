import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ChangePriceCoins } from '../../Redux/action';

const EditCoinRow = ({ coin, index }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedPrice, setEditedPrice] = useState(coin.current_price);

  const startEditing = () => {
    setEditing(true);
  };

  const saveChanges = async () => {
    try {
      // Llama a tu acción ChangePriceCoins para actualizar el precio en la API
      await dispatch(ChangePriceCoins(coin.id, editedPrice));

      // Después de la actualización exitosa, desactiva la edición
      setEditing(false);
    } catch (error) {
      console.error("Error al cambiar el precio:", error);
      // Maneja el error si es necesario
    }
  };

  const cancelEditing = () => {
    setEditing(false);
    setEditedPrice(coin.current_price); // Restaura el precio original al cancelar la edición
  };

  return (
    <tr>
      <td className="text-muted">{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "3%" }}
        />
        <span>{coin.name}</span>
        <span className="ms-3 text-muted">{coin.symbol}</span>
      </td>

      <td>
        {editing ? (
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        ) : (
          `$${editedPrice.toLocaleString()}`
        )}
      </td>

      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>

      <td>
        ${coin.total_volume.toLocaleString()}
      </td>

      <td>
        {editing ? (
          <>
            <button className="btn btn-success btn-sm" onClick={saveChanges}>
              Guardar
            </button>
            <button className="btn btn-secondary btn-sm ms-1" onClick={cancelEditing}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="btn btn-primary btn-sm" onClick={startEditing}>
            Editar Precio
          </button>
        )}
      </td>
    </tr>
  );
};

export default EditCoinRow;
