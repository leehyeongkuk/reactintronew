import Header from './component/Hd';
import Lhkswiper from './component/Lhkswiper';
import Preinterview from './component/Preinterview';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Lhkswiper></Lhkswiper>
      
      <Preinterview></Preinterview>
      <Preinterview></Preinterview>
      <Preinterview></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;