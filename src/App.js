import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello </h1>}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

//라우트는 url
//Routes 는 route를 찾는 역할
//브라우져를 route를 찾으면 랜더링을 함
//Brower Router에서 URL은 보통 웹사이트 url처럼 생김
//다른 router 종류인 hashRouter를 사용하면 3000/#/movie 이런 식으로 생김
export default App;
