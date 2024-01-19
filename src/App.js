import logo from './logo.svg';
import './App.css';
import ParentCompoent from './Components/ParentCompoent';
import Counter from './Components/Counter';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Components/reducers';
import IncDec from './Components/IncDec';
import Debouncing from './Components/Debouncing';
import JavascriptDemo from './Components/JavascriptDemo';
import ClassDemo from './Components/ClassDemo';
import CounterDemo from './Components/CounterDemo';
import AppDemo from './Components/AppDemo';
import EventDelegation from './Components/EventDelegation';
import { GetdataComponent2 } from './Components/HocCompoent';
import MyForm from './Components/MyForm';
const store = createStore(rootReducer, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe( () => {
  console.log('state\n', store.getState());
});

function App() {
  return (
   
    <Provider store={store}>
    {/* <ParentCompoent/>
    <Counter/> */}
    {/* <JavascriptDemo/> */}
    {/* <Debouncing/>
    <ParentCompoent/>
    <IncDec /> */}
    {/* <CounterDemo/> */}
    {/* <ClassDemo/> */}
    {/* <AppDemo/> */}
    {/* <GetdataComponent2/>
    <EventDelegation/> */}
    <MyForm/>
    </Provider>
  
  );
}

export default App;
