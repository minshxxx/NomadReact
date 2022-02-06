const { useState, useEffect } = require("react");

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((item) => (
            <li key={item.key}>
              {item.name} ({item.symbol}):{item.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
