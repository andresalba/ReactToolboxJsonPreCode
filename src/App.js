import mock from './MOCK_DATA.json';
import './App.css';

//MOCK_DATA.json source: https://www.mockaroo.com/

function App() {

  return (
    <div className="App">
      <pre>
        <code>
          {JSON.stringify(mock, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default App;