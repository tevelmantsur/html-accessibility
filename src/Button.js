function Button(props) {
  return (
    <button className="button" tabIndex="0" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
