const SummaryCard = ({
  formData,
  showHealth,
  showEducation,
  showTech,
  joke,
}) => {
  return (
    <div className="w-[30%] bg-[#1d1d1d] rounded-md shadow-[0px_-2px_10px_rgba(0,0,0,1)] p-[20px]">
      <div className="text-white flex flex-col gap-2">
        <span>
          <strong>Name:</strong> {formData.Name}
        </span>
        <span>
          <strong>Email:</strong> {formData.email}
        </span>
        {showTech && (
          <div className="flex flex-col">
            <span>
              <strong>Favorite Programming Language:</strong> {formData.tech}
            </span>
            <span>
              <strong>Experience:</strong> {formData.experience} years
            </span>
          </div>
        )}
        {showHealth && (
          <div className="flex flex-col">
            <span>
              <strong>Diet Preference:</strong> {formData.dietPreference}
            </span>
            <span>
              <strong>Exercise Frequency:</strong> {formData.exerciseFrequency}
            </span>
          </div>
        )}
        {showEducation && (
          <div className="flex flex-col">
            <span>
              <strong>Education Level:</strong> {formData.educationLevel}
            </span>
            <span>
              <strong>Field of Study:</strong> {formData.field_of_study}
            </span>
          </div>
        )}
        <span className="flex flex-wrap w-[100%]">
          <strong>Feedback:</strong> {formData.feedback}
        </span>
        {joke && (
          <div className=" flex flex-col text-[20px]">
            <span className="mx-auto">
              <strong>Joke for you</strong>
            </span>
              
              <span>{joke}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
