const Icon = ({ name, link }) => {
  return (
    <a href={link}>
      <img src={name} alt={name} />
    </a>
  );
};

export default Icon;
