import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

const title = "Did NC State Win?";

function App() {
  return (
    <div>
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <div style = {{ textAlign: 'center' }}>
        <h1>DID NC STATE WIN?</h1>
        <div style={{ fontSize: '120px', color: '#cc0000' }}>YES!</div>
      </div>
    </div>

  );
}

export default App;
