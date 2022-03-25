import { TitleCaseFormatter } from "../../../utility/functions/Formatters/TitleCaseFormatter";

const Identity = (props) => {
  return (
    <div className="S_landing">
      <div className="S_leftbar">
        <div className="S_identity">
          <img
            className="S_profile img-fluid"
            src="/images/Profile.svg"
            alt="Profile"
          />
          <div className="name">
            {TitleCaseFormatter(props.userDetails?.firstName)}
          </div>
        </div>
        <div className="S_menu">
          <div className="S_option S_option1" onClick={() => props.onShow1()}>
            <i className="fas fa-tachometer-alt-fastest"></i>
            <span>Your Sites</span>
          </div>
          <div className="S_option S_option1" onClick={() => props.onShow2()}>
            <i className="fab fa-buffer"></i>
            <span>Requests</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
