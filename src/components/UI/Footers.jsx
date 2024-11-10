import React from "react";
import FooterAPIData from "../../API/FooterData.json";
import { MdEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footers() {
  const footerIconsArray = {
    MdPlace: <MdPlace />,
    MdAddCall: <MdAddCall />,
    MdEmail: <MdEmail />,
  };
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {FooterAPIData.map((data, id) => {
          return (
            <div className="footer-contact" key={id}>
              <div className="icon"> {footerIconsArray[data.icon]}</div>
              <div className="footer-contact-text">
                <p> {data.title} </p>
                <p> {data.details} </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://www.linkedin.com/in/niyati-patel-5a5881261/">
                  {" "}
                  Niyati Patel{" "}
                </NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  {" "}
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="https://www.instagram.com/destinydelightt">
                    {" "}
                    Social{" "}
                  </NavLink>
                </li>
                {/* you are give here you github repositary when you are shared this file github.com */}
                <li>
                  {" "}
                  <NavLink to="https://github.com/niyatiit">
                    {" "}
                    Source Code{" "}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/contect"> Contact </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
