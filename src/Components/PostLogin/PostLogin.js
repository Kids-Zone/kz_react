import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const PostLogin = (props) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [setUserMetadata] = useState(null);

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
        } else if (user_metadata.role === "ch") {
          props.history.push({
            pathname: "/kidsavailability",
          });
        } else {
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
  }, [getAccessTokenSilently, props.history, setUserMetadata, user.sub]);

  return <></>;
};

export default PostLogin;
