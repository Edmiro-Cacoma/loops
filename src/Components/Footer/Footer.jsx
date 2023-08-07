import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  logo,
} from "../../Assets/icons/icons";

const Footer = () => {
  return (
    <>
      <footer className=" flex md:items-center text-white bg-black mt-10 md:h-48">
        <div className="flex flex-col md:flex-row mt-10 w-full  justify-between items-center md:w-[70rem] mx-auto md:justify-between ">
          <div className="flex  flex-col">
            <a href="/">
              <img src={logo} alt="" className="mb-5" />
            </a>
            <ul className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <li>
                <a href="/" className="hvr-underline-from-center">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hvr-underline-from-center">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="hvr-underline-from-center">
                  Events
                </a>
              </li>
              <li>
                <a href="/" className="hvr-underline-from-center">
                  Products
                </a>
              </li>
              <li>
                <a href="/" className="hvr-underline-from-center">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center h-32 mt-8">
            <div className="flex flex-row md:justify-end gap-4 mb-5">
              <img src={Facebook} alt="" className="hvr-pulse" />
              <img src={Twitter} alt="" className="hvr-pulse" />
              <img src={Pinterest} alt="" className="hvr-pulse" />
              <img src={Instagram} alt="" className="hvr-pulse" />
            </div>
            <p>Support © 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
