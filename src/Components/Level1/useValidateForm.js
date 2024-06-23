const useValidateForm = (formData, showGuest) => {
  const validationErrors = {};
  if (!formData.name.trim()) {
    validationErrors.name = "Name is required";
  }
  if (!formData.email.trim()) {
    validationErrors.email = "email is required";
  }
  if (!formData.age.trim()) {
    validationErrors.age = "age is required";
  }
  if (showGuest) {
    if (!formData.guest.trim()) {
      validationErrors.guest = "guest is required";
    }
  }
  return validationErrors;
};

export default useValidateForm;
