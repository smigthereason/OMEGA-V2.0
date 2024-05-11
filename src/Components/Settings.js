import React from "react";
// import avatar from "../Assets/avatar1.png";
// import "./Settings/Settings.css" 

const Settings = () => {
  return (
    <div className="container-bod flex-grow-1 text-white bg-black container-p-y">
      <h4 className="font-weight-bold py-3 mb-4 uppercase">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light container  flex items-center justify-between">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">
                General
              </a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">
                Change password
              </a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">
                Info
              </a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">
                Social links
              </a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">
                Connections
              </a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">
                Notifications
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body media align-items-center">
                  {/* <img src={avatar} alt="Avatar" className="d-block ui-w-80" /> */}
                  <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input type="file" className="account-settings-fileinput" />
                    </label>{" "}
                    &nbsp;
                    <button type="button" className="btn btn-default md-btn-flat">
                      Reset
                    </button>
                    <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control mb-1" value="nmaxwell" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value="Nelle Maxwell" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control mb-1" value="nmaxwell@mail.com" />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.<br />
                      {/* <a href="javascript:void(0)">Resend confirmation</a> */}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" value="Company Ltd." />
                  </div>
                </div>
              </div>
              {/* Other tab-pane content goes here */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Settings;
