import { BrowserRouter, Routes, Route, Link, useNavigate, } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Home = ({list, deleteBeverage}) => {
  console.log(list);
  const onClick = (event) => {
    console.log(event.target.id);
    deleteBeverage(event.target.id);
  };

  return (
  <table border="1" style={{borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>음료명</th>
        <th>설명</th>
        <th>삭제</th>
      </tr>
    </thead>
    <tbody>
      {list.map((item) => (//한줄일때는 상관없는데 여러개가 들어갈 경우 key값 명시 해줘야됨
        <tr key={item.id}> 
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.desc}</td>
          <td>
            <button onClick={onClick} id={item.id}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};
const Create = ({ addBeverage }) => { //prop가 숨겨져 있는데 바로준거
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault(); //onSubmit에서 event preventDefault 해죠서 바로가는 걸 막음
    const title = event.target.title.value;
    const desc = event.target.desc.value;
    addBeverage(title, desc); 
    navigate("/"); //useNavigate로 추가를 했을때 원하는 페이지로 갈수 있게 설정할수 있음
  };
  return (
  <form onSubmit={onSubmit}>
  <div>
    <label htmlFor="title">음료명:</label><input type="text" id="title" name="title" placeholder="음료명 입력"/>
  </div>
  <div>
    <label htmlFor="desc">설명:</label><input type="text" id="desc" name="desc" placeholder="설명 입력"/>
  </div>
  <input type="submit" value="추가" />
  </form>
  )
};
const App = () => {
  const [id, setId] = useState(3);
  const [beverages, setBeverages] = useState([
    {id: 1, title: "여수 윤슬 헤이즐넛 콜드브루", desc: "윤슬을 형상화한 헤이즐넛 콜드브루"},
    {id: 2, title: "아이스 오렌지 판타지 유스베리 티", desc:"상큼한 오렌지와 유스베리, 얼그레이 티의 조화"},
  ]);

  const addBeverage = (title, desc) => {
    const newBeverage = { id, title, desc }; // id:id로 입력해야되지만 값이 같으면 id 한번만 써도 됨
    setBeverages([...beverages, newBeverage]);
    setId(id + 1);
  };

  const deleteBeverage = (id) => {
    const newList = beverages.filter((item) => item.id !== parseInt(id)); // id값이 숫자여서 parseInt로 해줌
    setBeverages(newList);
  };

  return (
  <BrowserRouter>
  <h1>Cafe</h1>
    <ul>
      <li>
        <Link to="/">목록</Link>
      </li>
      <li>
        <Link to="/create">추가</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home list={beverages} deleteBeverage={deleteBeverage}/>} />
      <Route path="/create" element={<Create addBeverage={addBeverage} />} />
    </Routes>
  </BrowserRouter>

);
};

export default App;
