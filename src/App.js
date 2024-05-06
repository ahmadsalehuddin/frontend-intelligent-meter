import "./App.css";

import Topbar from "./components/topbar/Topbar";
import Inventory from "./pages/inventory/Inventory";

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full">
        <Topbar />
      </div>
      <div className="row-span-2 col-span-2">Sidebar</div>
      <div className="col-span-10">
        <Inventory />
      </div>
      <div className="col-span-10">
        <div className="h-12">Footer</div>
      </div>
    </div>
  );
}

export default App;
