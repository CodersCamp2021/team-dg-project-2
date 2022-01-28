import '../styles/Public.css';

import scheme from '../../data/scheme.json';

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
        <p>{`${social.id}: ${social.link}`}</p>
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
        <h4>{`${scheme.body.position} from ${scheme.body.location}`}</h4>
        <p>{scheme.body.description}</p>
        <h4>Experience:</h4>
        <ul>{experienceList}</ul>
      </div>
      <div className="socials-container">
        <h4>Socials:</h4>
        <ul>{socialList}</ul>
      </div>
      <div className="signature-container">
        <img src={scheme.signature.signatureImg} alt={scheme.name} />
      </div>
    </div>
  );
};

export default Public;
