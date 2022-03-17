import data from '../../data/data.json';
import PublicPage from '../components/PublicPage';

const { name, email, body } = data;

const PublicPageView = () => {
  return (
    <PublicPage
      name={name}
      profession={body.profession}
      location={body.location}
      description={body.description}
      email={email}
    />
  );
};

export default PublicPageView;
