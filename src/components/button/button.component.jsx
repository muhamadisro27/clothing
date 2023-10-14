import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ attributes, children, buttonType = "" }) => {
  return (
    <button
      {...attributes}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
