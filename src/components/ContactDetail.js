import React from "react";
import user from "../images/User.jpeg";
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  const contact = props.location.state.contacts;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header"></div>
          <div className="description"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;

// const ContactDetail = () => {
//   const location = useLocation();
//   const contact = location.state.contacts;

//   return (
//     <div className="main">
//       <div className="ui card centered">
//         <div className="image">
//           <img src={user} alt="user" />
//         </div>
//         <div className="content">
//           <div className="header">{contact.name}</div>
//           <div className="description">{contact.email}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetail;
