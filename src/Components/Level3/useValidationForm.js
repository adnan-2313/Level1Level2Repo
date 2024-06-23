const useValidateForm = (selections, showTech, showHealth, showEducation) => {
  const validationErrors = {};
  if (!selections.Name.trim()) {
    validationErrors.Name = "Name is required";
  }
  if (!selections.email.trim()) {
    validationErrors.email = "email is required";
  }
  if (showTech) {
    if (!selections.tech.trim()) {
      validationErrors.programming_language = "language is required";
    }
    if (!selections.experience.trim()) {
      validationErrors.experience = "experience is required";
    }
  }
  if (showHealth) {
    if (!selections.exerciseFrequency.trim()) {
      validationErrors.exerciseFrequency = "exerciseFrequency is required";
    }
    if (!selections.dietPreference.trim()) {
      validationErrors.dietPreference = "dietPreference is required";
    }
  }
  if (showEducation) {
    if (!selections.educationLevel.trim()) {
      validationErrors.educationLevel = "education level is required";
    }
    if (!selections.field_of_study.trim()) {
      validationErrors.field_of_study = "field of study is required";
    }
  }
  if (!selections.feedback.trim()) {
    validationErrors.feedback = "feedback level is required";
  } else if (selections.feedback.length < 50) {
    validationErrors.minfeedback = "At least 50 Character";
  }

  return validationErrors;
};

export default useValidateForm;
