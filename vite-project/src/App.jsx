import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const callApi = async () => {
  //   axios
  //     .get("/api")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   callApi();
  // }, []);

  const [hotelName, setHotelName] = useState(null);

  const [backendData, setBackendData] = useState([{}]);
  const [value, setValue] = useState("");

  const handlChange = (e) => {
    setValue(e.target.value);
    fetchHotelName();
  };

  const fetchHotelName = async () => {
    axios.post("http://localhost:5000/text", { user: value }).then((res) => {
      console.log(res.config.data);
    });
  };

  const dd = () => {
    console.log(backendData);
  };

  const atets = async () => {
    const test = await axios
      .get("http://localhost:5000/api")
      .then((res) => setBackendData(res.data));
  };

  useEffect(() => {
    atets();
    console.log(backendData);
  }, []);

  return (
    <div className="App">
      <input name="user" onChange={handlChange}></input>
      {/* <button onClick={onclick}>전송</button> */}
      <h3>d</h3>
      {/* {typeof backendData === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.map((it) => {
          return <p>{it}</p>;
        })
      )} */}

      <p onClick={dd}>d</p>
      {backendData.map((it, i) => {
        return <div key={i}>{it.name}</div>;
      })}
      {/* {dummyList.map((it) => (
        <div>
          <div>작성자: {it.author}</div>
          <div>내용: {it.content}</div>
          <div>감정: {it.emotion}</div>
          <div>작성시간(ms): {it.created_date}</div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
