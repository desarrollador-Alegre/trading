import { useEffect, useState } from "react";
import TableCoins from "./TableCoins";
import { Coins } from '../../Redux/action';
import { useSelector, useDispatch } from 'react-redux'

function AllCoins() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  const [search, setSearch] = useState("");

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

export default AllCoins;
