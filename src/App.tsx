import { useState } from "react";
import EditorAndPreview from "./Components/EditorAndPreview";
import Header from "./Components/Header";
import DeleteDocument from "./Components/DeleteDocument";
import initialText from "./Components/DefaultText";
import Menu from "./Components/Menu";
function App() {
  const [markdown, setMarkdown] = useState<string>(initialText);
  const [openMenu, setOpenMenu] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [docName, setDocName] = useState<string>(
    localStorage.getItem("docName") || ""
  );

  const clearTextarea = () => {
    setMarkdown("");
    setDocName("");
  };
  return (
    <>
      <div className="flex flex-row overflow-hidden">
        <div
          className={`${
            openMenu ? "translate-x-0" : "translate-x-[-256px] z-40"
          }  transition-all duration-100`}
        >
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div
          className={`${darkMode && "bg-[#151619]"} w-[100vw] overflow-hidden ${
            openMenu && "translate-x-[254px] transition-all duration-100"
          }`}
        >
          <Header
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            deleteClick={deleteClick}
            setDeleteClick={setDeleteClick}
            docName={docName}
            setDocName={setDocName}
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
          <EditorAndPreview
            markdown={markdown}
            setMarkdown={setMarkdown}
            darkMode={darkMode}
            setDocName={setDocName}
          />
        </div>
      </div>
      <DeleteDocument
        deleteClick={deleteClick}
        darkMode={darkMode}
        setDeleteClick={setDeleteClick}
        docName={docName}
        clearTextarea={clearTextarea}
      />
    </>
  );
}

export default App;
