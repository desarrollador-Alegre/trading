import { useEffect, useState } from "react";
import TableCoins from "./TableCoins";
import { Coins, ChangePriceCoins } from '../../Redux/action';
import { useSelector, useDispatch } from 'react-redux'

function EditCoins() {
  const dispatch = useDispatch(); 
  const coins = useSelector((state) => state.coins);
  const [price, setPrice] = useState("");

  const [search, setSearch] = useState("");
console.log(coins);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con la moneda y el precio, como enviarlos a tu backend
 dispatch(ChangePriceCoins(coins.id, price)); 
  
    // También podrías despachar una acción de Redux aquí si es necesario
  };
  useEffect(() => {
    dispatch(Coins());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Buscar..."
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default EditCoins;
