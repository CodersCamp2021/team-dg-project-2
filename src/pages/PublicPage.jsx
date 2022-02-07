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
        <Icon name={`${social.id}.svg`} />
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
        <h5>{body.headline}</h5>
        <p>{body.description}</p>
        <h5>Experience:</h5>
        <ul>{experienceList}</ul>
      </div>
      <Button pathname={body.cta.link} text={body.cta.text} />
      <div className="public__socials">
        <ul className="public__socials-list">{socialList}</ul>
      </div>
      <div className="public__signature">
        <img src={signature.src} alt={name} />
      </div>
    </div>
  );
};

export default PublicPage;