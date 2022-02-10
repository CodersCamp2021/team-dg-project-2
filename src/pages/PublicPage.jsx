/* eslint-disable react/prop-types */
import '../styles/PublicPage.css';
import '../styles/Button.css';

import data from '../../data/data.json';
import Icon from '../components/Icon';

const PublicPage = ({ name, profession, location, description, email }) => {
  const { socials, photo } = data;

  const socialList = socials.map((social) => {
    return (
      <li key={social.id}>
        <a href={social.link} target="_blank" rel="noreferrer">
          <Icon name={`${social.id}.svg`} />
        </a>
      </li>
    );
  });

  return (
    <div className="public">
      <div className="public__img">
        <img src={photo.src} alt={name} />
      </div>
      <div className="public__content">
        <h2>{name}</h2>
        <h5>
          {profession} from {location}
        </h5>
        <p className="description">{description}</p>
      </div>
      <button type="button" className="btn contact-me" onClick={() => alert(`Email sent to: ${email}`)}>
        Contact me
      </button>
      <div className="public__socials">
        <ul className="public__socials-list">{socialList}</ul>
      </div>
      <div className="public__signature">
        <img src="/public/signature.png" alt="" />
      </div>
    </div>
  );
};

export default PublicPage;
