// Higher Order Component (HOC) - A component (HOC) thet renders another component
// Reuse code
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requiredAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the information.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuth={true} info="This is the details" />,
  document.getElementById("app")
);

/*ReactDOM.render(
  <AdminInfo isAdmin={true} info="This is the details" />,
  document.getElementById("app")
);*/
