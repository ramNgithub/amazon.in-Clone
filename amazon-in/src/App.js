import "./App.css";
import { Fashion } from "./Components/Fashion/Fashion";
import { Women } from "./Components/Women/Women";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* <Fashion /> */}
      <MainRoutes></MainRoutes>
      {/* <Women /> */}
    </div>
  );
}

export default App;
