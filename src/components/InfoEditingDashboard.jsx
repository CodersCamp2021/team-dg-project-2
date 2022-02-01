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
        <h3>Edit your page</h3>
        <button className="dashboard__content__button-change-photo" type="button">
          Change photo
        </button>
        <p className="caption">Recommended dimension 256px x 256px. Max 2MB (jpg ,png).</p>

        <h5>Personal data</h5>

        <p className="caption">Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <p className="caption">Profession</p>
        <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />

        <p className="caption">Location</p>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

        <p className="caption">Description</p>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <p className="caption">enter Your email</p>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <h5>Social media</h5>
        <input type="text" value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} />

        <input type="text" value={linkedInLink} onChange={(e) => setLinkedInLink(e.target.value)} />

        <input type="text" value={youTubeLink} onChange={(e) => setYouTubeLink(e.target.value)} />

        <input type="text" value={gitHubLink} onChange={(e) => setGitHubLink(e.target.value)} />

        <div>
          <button className="dashboard__content__button-save-changes" type="button">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoEditingDashboard;
