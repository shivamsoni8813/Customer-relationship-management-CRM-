import './App.css';
import CustomerForm from './components/customerform/CustomerForm';
import CustomerList from './components/customerlist/CustomerList';
import AppRoutes from './components/Routing/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes/>
      {/* <CustomerList/> */}
      {/* <CustomerForm/> */}
    </div>
  );
}

export default App;
