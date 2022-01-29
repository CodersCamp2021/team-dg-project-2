import '../styles/Public.css';

import scheme from '../../data/scheme.json';
import Button from '../components/Button';
import Icon from '../components/Icon';

const Public = () => {
  const experienceList = scheme.body.experience.map((work) => {
    return (
      <li key={work.id}>
        <p>{work.text}</p>
      </li>
    );
  });

  const socialList = scheme.socials.map((social) => {
    return (
      <li key={social.id}>
        <Icon name={`${social.id}.svg`} link={`${social.link}`} />
      </li>
    );
  });

  return (
    <div className="public-container">
      <div className="img-container">
        <img src={scheme.photo.src} alt={scheme.name} />
      </div>
      <div className="content-container">
        <h2>
          {scheme.body.headline} {scheme.name} {scheme.surname}
        </h2>
        <h5>{`${scheme.body.position} from ${scheme.body.location}`}</h5>
        <p>{scheme.body.description}</p>
        <h5>Experience:</h5>
        <ul>{experienceList}</ul>
      </div>
      <Button pathname="www.facebook.com" text="Contact me" />
      <div className="socials-container">
        <ul className="socials-list">{socialList}</ul>
      </div>
      <div className="signature-container">
        <img src={scheme.signature.signatureImg} alt={scheme.name} />
      </div>
    </div>
  );
};

export default Public;
