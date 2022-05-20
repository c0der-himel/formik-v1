import { Field, ErrorMessage } from 'formik';

const Select = ({
  label,
  name,
  required,
  errors,
  touched,
  options,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <div className="d-flex">
        <label htmlFor={name} className="form-label ms-1">
          {label}
        </label>
        <span className="text-danger fw-bold ms-1">{required && '*'}</span>
      </div>
      <Field
        className={errors && touched ? 'form-select is-invalid' : 'form-select'}
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-danger mt-1 ms-1"
      />
    </div>
  );
};

export default Select;
