import axios from 'axios';
import { useEffect, useState } from 'react';

import PublicPage from '../components/PublicPage';

const PublicPageView = () => {
  const [userData, setUserData] = useState('');

  const getUserData = () => {
    axios
      .get('http://localhost:4000/api/pages/jolelo') // ! we'll need to change end of this link to slug from GET /public/:slug request
      .then((response) => {
        const fetchedUserData = response.data;
        setUserData(fetchedUserData);
      })
      .catch(() => {
        setUserData({
          name: 'Something went wrong',
          profession: "We're sorry",
          location: 'the bottom of our heart',
          description: '⭐️ Please try again ⭐️',
        });
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <PublicPage
      name={userData.name}
      profession={userData.profession}
      location={userData.location}
      description={userData.description}
      email={userData.email}
      twitterLink={userData.twitterLink}
      linkedInLink={userData.linkedInLink}
      youTubeLink={userData.youTubeLink}
      gitHubLink={userData.gitHubLink}
    />
  );
};

export default PublicPageView;
