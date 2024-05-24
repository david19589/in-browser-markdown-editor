import Toggle from "../Toggle";
import Logo from "/src/assets/logo.svg";

function Menu(props: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="absolute z-40 left-0 top-0 bottom-0 bg-[#1D1F22] px-[24px] pt-[27px]">
        <img className="desktop:hidden mb-[27px]" src={Logo} alt="Logo" />
        <div>
          <h1 className="text-[14px] font-[500] font-sans leading-[16.41px] tracking-[2px] mb-[29px] text-[#7C8187]">
            MY DOCUMENTS
          </h1>
          <h1 className="text-[15px] leading-[17.58px] font-[400] font-sans text-[#FFF] min-w-[208px] px-[45px] py-[12px] bg-[#E46643] hover:bg-[#F39765] mb-[24px] rounded-md cursor-pointer transition-all duration-200">
            + New Document
          </h1>
        </div>
        <Toggle darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      </div>
    </>
  );
}
export default Menu;
