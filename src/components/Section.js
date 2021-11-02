const Section = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>;
      <div className="Scroll">
        {props.pictures.map((img, index) => {
          return <img key={index} src={img} alt="img" />;
        })}
        ;
      </div>
    </div>
  );
};

export default Section;
