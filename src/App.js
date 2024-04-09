import { Link } from "react-router-dom";
import "./App.css";
import UsingComponent from "./UsingComponent";
import { useNavigate } from "react-router-dom";

function App() {
  //history object is used to manage the browsing session history used before router v6
  // const history = useHistory();

  //for v6
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div>
      {/* <h1>this is my app component</h1>
      <h4>Re-usable component</h4>
      <UsingComponent name="Sumit"></UsingComponent>
      <Link className="link-btn" to="/Body">
        Navigate to Body
      </Link>
      <button className="btn primary-btn">
        <Link to="/About">Navigate to About</Link>
      </button> */}

      <div className="theme-container plan-details">
        <div className="page-title">
          <div className="nav-btn">
            
          </div>
          <div className="w-100">
            <div className="page-heading-container">
              <h3 className="head-lg heading text-uppercase">Plan details</h3>
            </div>
            <div className="breadcrum-container">
              <ul className="breadcrum">
                <li className="head-sm">All Products</li>
                <li className="head-sm">Health</li>
                <li className="head-sm">Plan Details</li>
              </ul>
            </div>
          </div>
        </div>

        <form className="theme-form mt-mobile">
          <div className="theme-card full has-form">
            <div className="card-content">
              <div className="row">
                <div className="form-field col-md-6 col-lg-4 col-xl-3">
                  <label for="dealerCode" className="head-sm">
                    dealer code
                  </label>
                  <select id="dealerCode" placeholder="Enter dealerCode">
                    <option>1</option>
                    <option>3</option>
                    <option>2</option>
                  </select>
                </div>

                <div className="form-field col-md-6 col-lg-4 col-xl-3">
                  <label className="head-sm required-field">pincode</label>
                  <select
                    placeholder="Enter Pincode"
                    autocomplete="off"
                    onkeydown="return event.keyCode !== 69"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  >
                    <option>1</option>
                    <option>3</option>
                    <option>2</option>
                  </select>
                </div>

                <div className="form-field col-md-6 col-lg-4 col-xl-3">
                  <label className="head-sm required-field">Business Type </label>
                  <div className="radio-container">
                    <div className="theme-radio radio-btn">
                      <input
                        type="radio"
                        id="new_business"
                        tabindex="0"
                        value="New Business"
                        required
                      />
                      <label for="new_business" className="m-l-none">
                        New Business
                      </label>
                    </div>
                    <div className="theme-radio radio-btn">
                      <input
                        type="radio"
                        id="portability"
                        tabindex="1"
                        value="Portability"
                        required
                      />
                      <label for="portability" className="m-l-none">
                        portability
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-field select-box col-md-6 col-lg-4 col-xl-3">
                  <div>
                    <label className="head-sm required-field">Plan Type </label>
                  </div>
                  <select className="ngSelectOption" id="Plan" placeholder="Select">
                    <option value="Individual">Individual</option>
                    <option value="Floater">Floater</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card-top-spacing theme-value">
            <span className="info-icon premium-tooltip premium-info-icon mr-10 ml-0">
              
            </span>
            <span>Please</span>
            <span className="px-1 link-btn mr-0 d-inline">click here</span>
            <span>
              for Important notification regarding 'Address & Pincode' declared
            </span>
          </div>

          <div className="btn-top-spacing">
            <button onClick={handleNavigate} type="submit" className="btn primary-btn active">
              proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
