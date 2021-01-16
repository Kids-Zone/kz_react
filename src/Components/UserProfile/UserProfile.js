import "./UserProfile.css";
import { useAuth0 } from "@auth0/auth0-react"
import {JSONPretty} from "react-json-pretty"

function UserProfile(props) {
  const {user, isAuthenticated} =useAuth0;
  return (
    isAuthenticated && (
        <div className="row">
            <div className="col">
              <h3 className="text-center" style={{ marginTop: "10px" }}>
                My Profile
              </h3>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <JSONPretty data = {user} />
            </div>
          </div>


    )
    
  );
}

export default UserProfile;
