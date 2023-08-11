import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //! Api den gelecek verileri tanimlamak icin useState kullaniyoruz
  const [todos, setTodos] = useState(null);

  // axoisla API ye istek atiyoruz
  useEffect(() => {
    axios
      .get("http://localhost:3030/todos")

      // axios promis tabanli oldugu icin response gelirse .then() ile yakaliyoruz
      .then((res) => setTodos(res.data))

      // hata gelirsde  .chatch() ile
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //! API 'e gondermek icin obje hazirla
    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
      date: new Date(),
      isDone: false,
    };
    console.log(newTodo);

    //! API yi guncelle

    axios.post("http://localhost:3030/todos", newTodo)
    .then(()=> setTodos([...todos, newTodo]))
    .catch(()=>
    alert('Uzgunuz bir sorun olustu'));

    // Submitten sonra formu sifirla
    e.target[0].value="";
    //! Guncelleme basarili olursa arayuzu guncelle
  };

  return (
    <div className="container bg-dark my-10">
      <h2>Yapilacaklar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Gonder</button>
      </form>

      {/* Ekrana Loading basma */}
      {!todos && <h3>Yukleniyor...</h3>}

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <span>{todo.isDone ? "Tamamlandi" : "Devam Ediyor"}</span>
            <br />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
