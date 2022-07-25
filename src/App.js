import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0.0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
        setCoinPrice(json[0].quotes.USD.price);
      });
  }, []); // 2번째 파라미터에 빈 배열을 넘기는 경우, 최초 1회만 실행

  const selectChange = (e) => {
    setCoinPrice(e.target.value);
    setMoney(0);
    setResult(0);
  }

  const transCoins = (e) => {
    setMoney(e.target.value);
    setResult(money / coinPrice);
  }

  return (
    // 소지 중인 달러를 입력 받아 선택한 코인의 구매 가능 갯수 출력
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <div>
          <select onChange={selectChange}>
            {coins.map(coin =>
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            )}
          </select>
          <hr />
          <label htmlFor="money">input your money : $</label>
          <input type="number" name="money" onChange={transCoins} value={money}></input>
          <br />
          <label htmlFor="transCoins">Coins available for purchase : </label>
          <input type="number" name="transCoins" readOnly={true} value={result}></input>
        </div>
      }
    </div>
  );
}

export default App;
