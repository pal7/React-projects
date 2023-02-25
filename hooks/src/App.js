import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [email, setEmail] = useState("");
  const [userInputEmail, setUserInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    userInputEmail === "ashwin@mail.com" && password === "secret"
      ? setLoggedIn(true)
      : setLoggedIn(false);

    //lifecycle
  }, [password, userInputEmail]);

  //CDMount
  //CDUnmount

  useEffect(() => {
    loggedIn
      ? fetch("https://dummyjson.com/quotes")
          .then((res) => res.json())
          .then((json) => setData(json.quotes))
      : console.log("do nothing");
  }, [loggedIn]);

  const stringifiedData = JSON.stringify(data);

  return (
    <div className="App">
      <h1>hooks</h1>
      <h2>Login</h2>
      {/* <h3>what's coming from the API</h3>
      <h4>{stringifiedData}</h4> */}
      <div>
        {data.map((item, index) => (
          <ul>
            <li style={{ listStyle: "none" }} key={index}>
              <h6>{item.quote}</h6>
              <p>{item.author}</p>
            </li>
          </ul>
        ))}
      </div>
      <p>Email</p>
      <input
        type="text"
        value={userInputEmail}
        onChange={(e) => setUserInputEmail(e.target.value)}
      />
      <br />

      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h1>{loggedIn ? "✅" : "👎"}</h1>
      <br />
      {userInputEmail}
      <br />
      {password}
      {/* <button onClick={() => setEmail(userInputEmail)}>GET EMAIL</button> */}
      {/* <button onClick={() => setUserInputEmail("")}>X</button> */}
    </div>
  );
}

export default App;
