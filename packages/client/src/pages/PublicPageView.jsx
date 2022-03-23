/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PublicPage from '../components/PublicPage';

const PublicPageView = () => {
  const [userData, setUserData] = useState('');
  const { id } = useParams();

  const getUserData = () => {
    axios
      .get(`http://localhost:4000/api/pages/${id}`)
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
