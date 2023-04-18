import './App.css';
import User from "./Components/User/User";
import Comment from "./Components/Comment/Comment";
import {useState} from "react";
    


export default function App() {
    let msg = 'Hello!';
    // let [login, setLogin] = useState('default');
    // let [password, setPassword] = useState();
    // function onLoginChange(e) {
    //     setLogin(e.target.value)
    // }
    // function onPasswordChange(e) {
    //     setLogin(e.target.value)
    // }
    // const [state, setState] = useState('Enter your data');

    // function handleClick() {
    //     setState('Your data is gone!');
    // }

    let [formState, setFormState] = useState({login:'', password:''});

    function onSubmit(e) {
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        e.preventDefault();
        console.log(formState);
    }

    function onChange(e){
        setFormState({...formState, [e.target.name]:e.target.value});
    }


            return (
              <div>
               <h1>{msg}</h1>

                  <form onSubmit={onSubmit}>
                      <p> <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
                          <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
                          <button>Submit</button>
                      </p>
                      {/*{state}*/}

                  </form>
                {/*<User/>*/}
                {/*  <Comment/>*/}



              </div>
            );
}

// export default App;
