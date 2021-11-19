import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login";


const App = () => {
  const user = useSelector(selectUser);
  return <div>{user ? <Login /> : <Login />}</div>
};

export default App;