function Slide(props) {
  return (
    <div className="slide-container" data-testid="slide">
      <h3 data-testid="title">{props.data[props.id-1].title}</h3>
      <p data-testid="description">{props.data[props.id-1].description}</p>
    </div>
  );
}

export default Slide;
