export const validate = (values) => {
  const errors = {};
  let phoneno = /^\d{10}$/i;
  if (!values.name) {
    errors.name = "* name is Required";
  }
  if (!values.address) {
    errors.address = "* address is Required";
  }
  if (!values.phone) {
    errors.phone = "* phone is Required";
  } else if (!phoneno.test(values.phone)) {
    errors.phone = "* phone 10 numbers ";
  }
  return errors;
};
