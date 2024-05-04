import "./App.css";

import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full">
        <Topbar />
      </div>
      <div className="row-span-2 col-span-3">Sidebar</div>
      <div className="col-span-9">
        <div className="h-[calc(100vh-7rem)]">Page Content</div>
      </div>
      <div className="col-span-9">
        <div className="h-12">Footer</div>
      </div>
    </div>
  );
}

export default App;
