import { Field, ErrorMessage } from 'formik';
import { DatePicker } from 'antd';
import moment from 'moment';

const Date = ({ label, name, required, errors, touched, ...rest }) => {
  return (
    <div className="mb-3">
      <div className="d-flex">
        <label htmlFor={name} className="form-label ms-1">
          {label}
        </label>
        <span className="text-danger fw-bold ms-1">{required && '*'}</span>
      </div>
      <Field id={name} name={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              className={
                errors && touched
                  ? 'form-control is-invalid rounded-2 py-2'
                  : 'form-control rounded-2 py-2'
              }
              id={name}
              {...field}
              {...rest}
              defaultValue={value}
              onChange={(val) => setFieldValue(name, val)}
              showTime
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

export default Date;
