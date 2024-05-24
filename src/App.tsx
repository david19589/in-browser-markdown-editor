import { useEffect, useState } from "react";
import EditorAndPreview from "./Components/EditorAndPreview";
import Header from "./Components/Header";
import DeleteDocument from "./Components/DeleteDocument";
import initialText from "./Components/DefaultText";
import Menu from "./Components/Menu";

type DocumentType = {
  name: string;
  content: string;
  creationDate: Date;
};

function App() {
  const [markdown, setMarkdown] = useState<string>(initialText);
  const [openMenu, setOpenMenu] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [docName, setDocName] = useState<string>(
    localStorage.getItem("docName") || "welcome.md"
  );

  const clearTextarea = () => {
    setMarkdown("");
    setDocName("");
    handleDeleteDocument();
  };

  const [documents, setDocuments] = useState<DocumentType[]>([
    { name: docName, content: initialText, creationDate: new Date() },
  ]);

  useEffect(() => {
    const storedDocName = localStorage.getItem("docName") || "welcome.md";
    const storedMarkdown = localStorage.getItem("markdown") || initialText;
    const storedCreationDate = localStorage.getItem("creationDate");
    setDocName(storedDocName);
    setMarkdown(storedMarkdown);
    const creationDate = storedCreationDate
      ? new Date(storedCreationDate)
      : new Date();
    const document: DocumentType = {
      name: storedDocName,
      content: storedMarkdown,
      creationDate: creationDate,
    };

    setDocuments([document]);
  }, []);
  const handleNewDocument = () => {
    const newDocumentName = `Document.md`;
    const newDocumentContent = "";
    const newDocumentCreationDate = new Date();
    const newDocument = {
      name: newDocumentName,
      content: newDocumentContent,
      creationDate: newDocumentCreationDate,
    };
    setDocuments((prevDocuments) => [...prevDocuments, newDocument]);
    setDocName(newDocumentName);
    setMarkdown(newDocumentContent);
  };

  const handleDocumentSwitch = (name: string, content: string) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.name === docName ? { ...doc, content: markdown } : doc
      )
    );
    setDocName(name);
    setMarkdown(content);
  };

  const handleDeleteDocument = () => {
    const updatedDocuments = documents.filter((doc) => doc.name !== docName);
    setDocuments(updatedDocuments);

    if (updatedDocuments.length > 0) {
      const { name, content } = updatedDocuments[0];
      setDocName(name);
      setMarkdown(content);
    } else {
      setDocName("");
      setMarkdown("");
    }

    setDeleteClick(false);
  };

  const handleDocNameChange = (newName: string) => {
    setDocName(newName);
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.name === docName ? { ...doc, name: newName } : doc
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
  }, [documents]);

  return (
    <>
      <div className="flex flex-row overflow-hidden">
        <div
          className={`${
            openMenu ? "translate-x-0" : "translate-x-[-256px] z-40"
          } transition-all duration-100`}
        >
          <Menu
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            docName={docName}
            documents={documents}
            setDocuments={setDocuments}
            setDocName={setDocName}
            setMarkdown={setMarkdown}
            handleNewDocument={handleNewDocument}
            handleDocumentSwitch={handleDocumentSwitch}
          />
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
            setDocName={handleDocNameChange}
            markdown={markdown}
            setMarkdown={setMarkdown}
            documents={documents}
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
