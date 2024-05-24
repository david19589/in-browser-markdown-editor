import Toggle from "../Toggle";
import Logo from "/src/assets/logo.svg";
import Document from "/src/assets/icon-document.svg";
import formatDate from "../FormatDate";

function Menu(props: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  docName: string;
  setDocName: React.Dispatch<React.SetStateAction<string>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  documents: Array<{ name: string; content: string; creationDate: Date }>;
  setDocuments: React.Dispatch<
    React.SetStateAction<
      Array<{ name: string; content: string; creationDate: Date }>
    >
  >;
  handleNewDocument: () => void;
  handleDocumentSwitch: (name: string, content: string) => void;
}) {
  
  return (
    <>
      <div className="absolute z-40 left-0 top-0 bottom-0 bg-[#1D1F22] px-[24px] pt-[27px]">
        <img className="desktop:hidden mb-[27px]" src={Logo} alt="Logo" />
        <div>
          <h1 className="text-[14px] font-[500] font-sans leading-[16.41px] tracking-[2px] mb-[29px] text-[#7C8187]">
            MY DOCUMENTS
          </h1>
          <h1
            onClick={props.handleNewDocument}
            className="text-[15px] leading-[17.58px] font-[400] font-sans text-[#FFF] min-w-[208px] px-[45px] py-[12px] bg-[#E46643] hover:bg-[#F39765] mb-[24px] rounded-md cursor-pointer transition-all duration-200"
          >
            + New Document
          </h1>
          <div className="max-h-[400px] overflow-y-auto">
            {props.documents.map((document, index) => (
              <div
                key={index}
                className="flex items-center gap-[16px] cursor-pointer group"
                onClick={() =>
                  props.handleDocumentSwitch(document.name, document.content)
                }
              >
                <img src={Document} alt="Document" />
                <div>
                  <span className="text-[13px] font-[300] font-sans leading-[15.23px] text-[#7C8187]">
                    {formatDate(document.creationDate)}
                  </span>
                  <h1 className="text-[15px] leading-[17.58px] font-[400] font-sans text-[#FFF] group-hover:text-[#E46643]">
                    {document.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Toggle darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      </div>
    </>
  );
}
export default Menu;
