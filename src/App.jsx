import './App.css';
import axios from 'axios';

function App() {
  const onClickUser = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => consolelog(err));
  };
  const onClickUser1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => consolelog(err));
  };
  return (
    <>
      <h1>hello</h1>
      <button onClick={onClickUser}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </>
  );
}

export default App;
