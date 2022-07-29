import Header from './Header';
import { HelloMessage,Person,HelloMessageSimple,TypeName,NamePassword,NamePassword2 } from './Home';


function App() {
  return (
    <div className="App">
      <HelloMessage />
      <Person name='jack' age='19' gender='male' />
      <HelloMessageSimple />
      <TypeName />
      <NamePassword />
      <NamePassword2 />
      <Header car='BMW' girls='200' />
    </div>
  );
}

export default App;
