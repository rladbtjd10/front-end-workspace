import KakaoMap from "./components/KakaoMap";
import DaumPostcode from "./components/DaumPostcode";

const App = () => {
  return (
  <>
  <button onClick={DaumPostcode}>주소검색</button>
  <KakaoMap />
  </>
  );
    
};

export default App;
