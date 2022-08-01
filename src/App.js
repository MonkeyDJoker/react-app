import Header from './Header';
import { HelloMessage,Person,HelloMessageSimple,TypeName,NamePassword,NamePassword2 } from './Home';
import Todolist from './Todolist';

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
      <Todolist/>
    </div>
  );
}

export default App;
