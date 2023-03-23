import { Link } from "react-router-dom";
import { FooterStyle, H4, UL } from "./styles";

const Footer = () => {
  return (
    <FooterStyle>
      <UL>
        <li>
          <Link to="/Contact">
            <H4>Contact</H4>
          </Link>
        </li>
        <li>
          <Link to="/MissingPage">
            <H4>MissingPage</H4>
          </Link>
        </li>
        <li>
          <Link to="/MissingPage">
            <H4>Ignore</H4>
          </Link>
        </li>
      </UL>
    </FooterStyle>
  );
};

export default Footer;
