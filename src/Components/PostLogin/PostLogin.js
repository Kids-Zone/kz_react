import { useAuth0 } from "@auth0/auth0-react";
import { JSONPretty } from "react-json-pretty";
import { useEffect, useState } from "react";

const PostLogin = (props) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-mhtjevle.us.auth0.com";

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

        if (user_metadata.role === "me") {
          props.history.push({
            pathname: "/membership-validation",
          });
        } else if(user_metadata.role === "ch"){
          props.history.push({
            pathname: "/kids-availability",
          });
        }
        else{
          props.history.push({
            pathname: "/about",
          });
        }

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  // if (isAuthenticated) {
  //   if ( userMetadata.role === "ME") {
  //     props.history.push({
  //       pathname: "/membership-validation",
  //    });
  //   }
  //   else{
  //    props.history.push({
  //       pathname: "/kids-availability",
  //     });
  //   }
  // }

  return (
    <div>
      <h3>User is {user ? user.email : "Unknown"} </h3>
      <h3>User metadata is {userMetadata ? userMetadata.role : "Unknown"} </h3>
    </div>
  );
};

export default PostLogin;
