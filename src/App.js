import './App.css';
import Form from './ReactForms';
import Register from './Register';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='rform'>
          <h1>React Form</h1>
          <Form />
          <Register />
        </div>
      </header>
    </div>
  );
}

export default App;
