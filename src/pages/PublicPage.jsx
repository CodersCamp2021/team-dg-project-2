import '../styles/PublicPage.css';

import data from '../../data/data.json';
import Button from '../components/Button';
import Icon from '../components/Icon';

const PublicPage = () => {
  const { body, name, photo, email, theme, socials, signature } = data;

  const experienceList = body.experience.map((work) => {
    return (
      <li key={work.id}>
        <p>{work.text}</p>
      </li>
    );
  });

  const socialList = socials.map((social) => {
    return (
      <li key={social.id}>
        <Icon name={`${social.id}.svg`} link={`${social.link}`} />
      </li>
    );
  });

  return (
    <div className="public-container">
      <div className="img-container">
        <img src={photo.src} alt={name} />
      </div>
      <div className="content-container">
        <h2>{name}</h2>
        <h5>{body.headline}</h5>
        <p>{body.description}</p>
        <h5>Experience:</h5>
        <ul>{experienceList}</ul>
      </div>
      <Button pathname={body.cta.link} text={body.cta.text} />
      <div className="socials-container">
        <ul className="socials-list">{socialList}</ul>
      </div>
      <div className="signature-container">
        <img src={signature.src} alt={name} />
      </div>
    </div>
  );
};

export default PublicPage;
