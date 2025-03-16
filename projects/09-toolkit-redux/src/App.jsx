import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector( (state) => state.counter );
  const dispatch = useDispatch();
  let amountOfIncrement = 0;

  const setAmountOfIncrement = ( { nativeEvent } ) => {
    const { data } = nativeEvent;
    console.log(data);
    amountOfIncrement = Number(data);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter}</p>
        <input 
          type="number" 
          name='amountOfIncrement' 
          defaultValue={ amountOfIncrement }
          onChange={ ( e ) => setAmountOfIncrement( e ) } />
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementByAmount(amountOfIncrement) ) }>
          Increment by 2
        </button>
       </div>
    </>
  )
}

export default App
