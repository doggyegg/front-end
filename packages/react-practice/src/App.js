import Home from "./views/home";
import { deepClone } from "@front-end/utils";

function App() {
  console.log(deepClone({ name: "zs" }));
  return (
    <div className="parent">
      <Home></Home>
    </div>
  );
}

export default App;
