function BigHeading(props) {
  return (
    <h1 tabindex="0" role="heading" className="big-heading">
      {props.children}
    </h1>
  );
}

export default BigHeading;
