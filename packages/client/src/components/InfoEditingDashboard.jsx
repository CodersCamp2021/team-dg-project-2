import '../styles/InfoEditingDashboard.css';

import { useState } from 'react';

// import { Link } from 'react-router-dom';

const InfoEditingDashboard = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const [twitterLink, setTwitterLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');
  const [youTubeLink, setYouTubeLink] = useState('');
  const [gitHubLink, setGitHubLink] = useState('');

  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <h3 className="dashboard__content__h3">Edit your page</h3>
        <button className="dashboard__content__button dashboard__content__button-change--photo" type="button">
          Change photo
        </button>
        <p className="dashboard__content__p dashboard__content__p--photo-dimensions">
          Recommended dimension 256px x 256px. Max 2MB (jpg, png).
        </p>

        <h5 className="dashboard__content__h5 dashboard__content__h5--section-divider">Personal data</h5>

        <p className="dashboard__content__p dashboard__content__p--input-names margin-top-0">Name</p>
        <input
          className="dashboard__content__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p className="dashboard__content__p dashboard__content__p--input-names">Profession</p>
        <input
          className="dashboard__content__input"
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />

        <p className="dashboard__content__p dashboard__content__p--input-names">Location</p>
        <input
          className="dashboard__content__input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <p className="dashboard__content__p dashboard__content__p--input-names">Description</p>
        <textarea
          className="dashboard__content__input dashboard__content__input--text-area"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p className="dashboard__content__p dashboard__content__p--input-names">Email</p>
        <input
          className="dashboard__content__input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h5 className="dashboard__content__h5 dashboard__content__h5--section-divider">Social media</h5>

        <input
          className="dashboard__content__input dashboard__content__input--social-media dashboard__content__input--social-media-twitter"
          type="text"
          value={twitterLink}
          onChange={(e) => setTwitterLink(e.target.value)}
        />

        <input
          className="dashboard__content__input dashboard__content__input--social-media dashboard__content__input--social-media-linkedin"
          type="text"
          value={linkedInLink}
          onChange={(e) => setLinkedInLink(e.target.value)}
        />

        <input
          className="dashboard__content__input dashboard__content__input--social-media dashboard__content__input--social-media-youtube"
          type="text"
          value={youTubeLink}
          onChange={(e) => setYouTubeLink(e.target.value)}
        />

        <input
          className="dashboard__content__input dashboard__content__input--social-media dashboard__content__input--social-media-github"
          type="text"
          value={gitHubLink}
          onChange={(e) => setGitHubLink(e.target.value)}
        />

        <button className="dashboard__content__button dashboard__content__button-save-changes" type="button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default InfoEditingDashboard;
