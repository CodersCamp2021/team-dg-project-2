import '../styles/InfoEditingDashboard.css';
import '../styles/TestBuild.css';

import { useState } from 'react';

import PublicPage from '../components/PublicPage';

const PageEdit = () => {
  const defaultDate = {
    name: 'Phil Json',
    profession: 'Graphic designer',
    location: 'Boston, MA',
    description:
      'I am an awarded and certified marketing tech solutions engineer with expert level experience consulting, implementing, and managing digital creative automation campaigns via email, mobile, push notifications, MMS, SMS and social media with the use of the following languages: SQL, XML, XSLT, JSON, HTML, ',
    email: 'thatJsonGuy@gmail.com',
    twitter: 'https://twitter.com/phelippe-son-of-json',
    linkedIn: 'https://www.linkedin.com/in/json-phelippe/',
    youTube: 'https://www.youtube.com/thatjsonbuddy',
    gitHub: 'https://github.com/jsonboiii',
  };
  const [name, setName] = useState(defaultDate.name);
  const [profession, setProfession] = useState(defaultDate.profession);
  const [location, setLocation] = useState(defaultDate.location);
  const [description, setDescription] = useState(defaultDate.description);
  const [email, setEmail] = useState(defaultDate.email);

  const [twitterLink, setTwitterLink] = useState(defaultDate.twitter);
  const [linkedInLink, setLinkedInLink] = useState(defaultDate.linkedIn);
  const [youTubeLink, setYouTubeLink] = useState(defaultDate.youTube);
  const [gitHubLink, setGitHubLink] = useState(defaultDate.gitHub);

  const logSuccess = () => {
    console.log('Saved Changes');
  };

  const buttonDisabled = () => {
    if (
      name === defaultDate.name &&
      profession === defaultDate.profession &&
      location === defaultDate.location &&
      description === defaultDate.description &&
      email === defaultDate.email &&
      twitterLink === defaultDate.twitter &&
      linkedInLink === defaultDate.linkedIn &&
      youTubeLink === defaultDate.youTube &&
      gitHubLink === defaultDate.gitHub
    )
      return true;
  };

  const buttonStatus = buttonDisabled();

  return (
    <div className="flex-horizontal">
      <div className="visible">
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
          </div>
          <div className="button-container">
            <button
              className="dashboard__content__button dashboard__content__button-save-changes"
              type="button"
              onClick={logSuccess}
              disabled={buttonStatus}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <div className="flex-center">
        <PublicPage
          name={name}
          profession={profession}
          location={location}
          description={description}
          email={email}
          twitterLink={twitterLink}
          linkedInLink={linkedInLink}
          youTubeLink={youTubeLink}
          gitHubLink={gitHubLink}
        />
      </div>
    </div>
  );
};

export default PageEdit;
