import {
  Group,
  FormInput as FormInputStyle,
  FormInputLabel,
} from "./form-input.style.jsx";

const FormInput = ({ label, inputOptions }) => {
  const getLabel = () => (inputOptions.value.length > 0 ? "shrink" : "");

  return (
    <Group>
      <FormInputStyle {...inputOptions} />
      {label && <FormInputLabel shrink={getLabel()}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
