import Menu from "/src/assets/icon-menu.svg";
import Document from "/src/assets/icon-document.svg";
import Logo from "/src/assets/logo.svg";
import Save from "/src/assets/icon-save.svg";
import CloseMenu from "/src/assets/icon-close.svg";

function Header(props: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-between items-center bg-[#2B2D31]">
      <div className="flex items-center">
        <div
          onClick={() => {
            props.setOpenMenu(!props.openMenu);
          }}
          className="w-[72px] h-[72px] flex items-center transition-all duration-200 bg-[#35393F] hover:bg-[#E46643] px-[21px] py-[27px] mr-[24px] cursor-pointer"
        >
          <img
            className="min-w-[30px]"
            src={props.openMenu ? CloseMenu : Menu}
            alt="Menu"
          />
        </div>
        <div className="flex items-center gap-[16px]">
          <img className="hidden desktop:flex" src={Logo} alt="Logo" />
          <span className="hidden desktop:flex w-[1px] h-[40px] bg-[#5A6069]"></span>
          <img src={Document} alt="Document" />
          <div>
            <h1 className="hidden tablet:flex text-[13px] font-[300] leading-[15.23px] font-sans cursor-default text-[#7C8187]">
              Document Name
            </h1>
            <input
              className="w-full outline-none bg-[#2B2D31] text-[15px] leading-[17.58px] font-[400] font-sans text-[#FFF] placeholder:text-[#FFF]"
              type="text"
              id="input"
              placeholder="welcome.md"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[24px] mr-[16px]">
        <div className="group cursor-pointer">
          <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              className="group-hover:fill-[#E46643] transition-all duration-200"
              d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
              fill="#7C8187"
            />
          </svg>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[12px] bg-[#E46643] hover:bg-[#F39765] rounded-md cursor-pointer transition-all duration-200">
          <img className="min-w-[16px]" src={Save} alt="Save" />
          <h1 className="hidden tablet:flex text-[15px] leading-[17.58px] font-[400] font-sans text-[#FFF]">
            Save Changes
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
