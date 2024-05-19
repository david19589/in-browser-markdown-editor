import { useState } from "react";
import EditorAndPreview from "./Components/EditorAndPreview";
import Header from "./Components/Header";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <EditorAndPreview />
    </div>
  );
}

export default App;
