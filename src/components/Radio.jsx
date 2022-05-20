import { Field, ErrorMessage } from 'formik';

const Radio = ({
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
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <div key={option.key} className="form-check ms-5">
              <input
                className="form-check-input"
                type="radio"
                name={option.value}
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label className="form-check-label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-danger mt-1 ms-1"
      />
    </div>
  );
};

export default Radio;
