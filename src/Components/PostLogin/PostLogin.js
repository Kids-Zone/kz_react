import { useAuth0 } from "@auth0/auth0-react"
import {JSONPretty} from "react-json-pretty"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PostLogin = (props) => {
  const {user, isAuthenticated, getAccessTokenSilently} =useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const location = useLocation()

  if( isAuthenticated ) {
    props.history.push({
      pathname: '/mentoring'
})
  }

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-mhtjevle.us.auth0.com';
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, []);

  return (
    <div>
    <h3>User is { user ? user.email : 'Unknown'} </h3>
    <h3>User metadata is  { userMetadata ? 'Here!' : 'Unknown'} </h3>
    </div>
    // isAuthenticated && (
    //     <div className="row">
    //         <div className="col">
    //           <h3 className="text-center" style={{ marginTop: "10px" }}>
    //             My Profile
    //           </h3>
    //           <h3>{user.name}</h3>
    //           <p>{user.email}</p>
    //           <JSONPretty data = {user} />
    //         </div>
    //       </div>


    // )
    
  );
}



export default PostLogin;
