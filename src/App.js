import './App.css';
import { Calendar } from './components/Calendar';

function App() {

  var weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  var monthsInYear=["January","February","March","April",
    "May","June","July","August","September","October","Novermber",
    "December"
  ]

  return (
    <Calendar weekdays={weekdays}
    monthsInYear={monthsInYear}/>
  );
}

export default App;
