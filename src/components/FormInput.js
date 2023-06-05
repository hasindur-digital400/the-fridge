import { useField } from 'formik';
import './FormInput.scss';

function FormInput({ name, label, ...inputProps }) {
  const [field] = useField(name);
  return (
    <div className='form-field'>
      <label className='form-field__label' htmlFor={name}>
        {label}
      </label>
      <input
        className='form-field__input'
        id={name}
        {...field}
        {...inputProps}
      />
    </div>
  );
}

export default FormInput;
