import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const url = `https://picsum.photos/v2/list?page=${count}&limit=${limit} `;
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, [count, limit]);

  return (
    <>
      <div className="App">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>

        <select
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        >
          <option>1</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
      {data.map((data, i) => {
        return (
          <img
            src={data.download_url}
            key={i}
            height="220"
            width="220"
            className="photo"
            alt="img"
          />
        );
      })}
    </>
  );
}

export default App;
