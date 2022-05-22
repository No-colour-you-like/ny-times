import NightModeSvg from "./Svg/NightModeSvg";
import LogoSvg from "./Svg/LogoSvg";
import Button from "./common/Button";

const Header = () => {
  return (
    <header className="header">
      <NightModeSvg className="header__night-mode-svg" />
      <LogoSvg className="header__logo" />
      <div className="header__btns">
        <Button className="header__btn">Sign In</Button>
        <Button className="header__btn">Subscribe</Button>
      </div>
    </header>
  );
};

export default Header;
