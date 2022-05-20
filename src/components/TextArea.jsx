import { Field, ErrorMessage } from 'formik';

const TextArea = ({ label, name, required, errors, touched, ...rest }) => {
  return (
    <div className="mb-3">
      <div className="d-flex">
        <label htmlFor={name} className="form-label ms-1">
          {label}
        </label>
        <span className="text-danger fw-bold ms-1">{required && '*'}</span>
      </div>
      <Field
        className={
          errors && touched ? 'form-control is-invalid' : 'form-control'
        }
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-danger mt-1 ms-1"
      />
    </div>
  );
};

export default TextArea;
