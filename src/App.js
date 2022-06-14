import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState(""); // useState의 초기값을 설정하지 않는 경우 경고 발생
  const onClick = () => setCounter(p => p + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const runOnlyOnce = () => console.log("i run only once");
  useEffect(runOnlyOnce, []);
  useEffect(() => { // keyword에 변화가 있을 때만 실행
    console.log("Search for", keyword);
  }, [keyword, counter]); // 배열 형태이기 때문에 여러 값 설정 가능
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
