const FormInput = ({ children, handleChange, id, ...otherProps }) => (
  <>
    <input id={id} onChange={handleChange} {...otherProps} />
    {children}
  </>
);

export default FormInput;
