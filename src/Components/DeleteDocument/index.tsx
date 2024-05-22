function DeleteDocument(props: {
  deleteClick: boolean;
  darkMode: boolean;
  setDeleteClick: React.Dispatch<React.SetStateAction<boolean>>;
  docName: string;
  clearTextarea: () => void;
}) {
  return (
    <div
      className={`${
        props.deleteClick
          ? "flex justify-center items-center absolute top-0 left-0 z-30 bg-[#7c81875c] w-[100vw] h-[100vh]"
          : "hidden"
      }`}
    >
      <div
        className={`${
          props.darkMode ? "bg-[#1D1F22]" : "bg-[#FFF]"
        } flex flex-col p-[24px] max-w-[343px] mx-[10px]`}
      >
        <h1
          className={`${
            props.darkMode && "text-[#FFF]"
          } text-[20px] leading-[26.38px] font-[700] font-serif mb-[16px]`}
        >
          Delete this document?
        </h1>
        <p className="text-[14px] leading-[24px] font-[700] font-serif max-w-[278px] text-[#7C8187] mb-[16px]">
          Are you sure you want to delete the `{props.docName || "welcome.md"}` document and its
          contents? This action cannot be reversed.
        </p>
        <button
          onClick={() => {
            props.clearTextarea();
            props.setDeleteClick(!props.deleteClick);
          }}
          className="px-[62px] py-[12px] text-[15px] leading-[17.58px] font-[400] font-sans text-[#FFF] bg-[#E46643] hover:bg-[#F39765]"
        >
          Confirm & Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteDocument;
