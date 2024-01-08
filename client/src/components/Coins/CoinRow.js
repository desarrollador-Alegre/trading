import styles from './Coins.module.css'

const CoinRow = ({ coin, index }) => {
  return (

    <tr >
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

      <td>${coin.edited_price ? coin.edited_price : coin.current_price && coin.current_price.toLocaleString()}</td>

      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h && coin.price_change_percentage_24h.toLocaleString()}
      </td>

      <td>
        ${coin.total_volume && coin.total_volume.toLocaleString()}
      </td>
    </tr>

  );
};

export default CoinRow;
