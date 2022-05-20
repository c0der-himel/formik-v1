import { Field, ErrorMessage } from 'formik';
import Select from 'react-select';

const MultiSelect = ({
  label,
  name,
  required,
  errors,
  touched,
  options,
  selectedOption,
  setSelectedOption,
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
        {({ form }) => {
          const { setFieldValue, setFieldTouched } = form;
          return (
            <Select
              isMulti
              id={name}
              name={name}
              className={
                errors && touched
                  ? 'form-control py-0 px-1 is-invalid'
                  : 'form-control py-0 px-1'
              }
              defaultValue={selectedOption}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e) => {
                setSelectedOption(e);
                setFieldValue(name, e);
              }}
              options={options}
              placeholder="Select option . . ."
            />
          );
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

export default MultiSelect;
