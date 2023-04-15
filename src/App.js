import './App.css';
import Posts from "./components/Posts/Posts";
import Launches from "./components/Launches/Launches";

function App() {
    let msg = 'Hello!';

            return (
              <div>
               <h1>{msg}</h1>

                  {/*<Posts/>*/}
                  <Launches/>
              </div>
            );
}

export default App;
