import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import { MdErrorOutline } from "react-icons/md";
import useValidateForm from "./useValidationForm";
import SummaryCard from "../Level3/SummaryCard";
const Form = () => {
  const [showTech, setShowTech] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [errors, setErrors] = useState({});
  const [showData, setShowData] = useState(false);
  const [apiData, setApiData] = useState();
  const [selections, setSelections] = useState({
    Name: "",
    email: "",
    tech: "",
    experience: "",
    exerciseFrequency: "",
    dietPreference: "",
    educationLevel: "",
    field_of_study: "",
    feedback: "",
  });
  const handleAPI = async () => {
    const data = await fetch(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const response = await data.json();
    setApiData(response?.joke);
  
    
  };
  useEffect(() => {
    if (showData) {
      handleAPI();
    }
  }, [showData]);
  const handleDropDownChange = (key, value) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [key]: value,
    }));
  };
  const validateForm = useValidateForm(
    selections,
    showTech,
    showHealth,
    showEducation
  );
  const handleSubmit = () => {
    setErrors(validateForm);
    if (Object.keys(validateForm).length === 0) {
      setShowData(true);
    }
  };

  return (
    <>
      <section className="bg-[#121212] flex gap-2 justify-center py-[5rem]">
        <div className="flex bg-[#1d1d1d] rounded-lg justify-center p-[50px_20px] shadow-[0_-2px_10px_rgba(0,0,0,1)] w-[35%]">
          <div className="flex w-[90%] flex-col gap-2 text-white">
            <div className="flex flex-row gap-2">
              <label className="w-[15%] text-[20px]">Name</label>
              <input
                onChange={(value) =>
                  handleDropDownChange("Name", value.target.value)
                }
                type="text"
                className="w-[80%] rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px]"
              />
            </div>
            {errors.Name && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.Name}
              </span>
            )}
            <div className="flex flex-row gap-2">
              <label className="w-[15%] text-[20px]">Email</label>
              <input
                type="email"
                onChange={(value) =>
                  handleDropDownChange("email", value.target.value)
                }
                className="w-[80%] rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px]"
              />
            </div>
            {errors.email && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.email}
              </span>
            )}
            <div className="flex flex-row gap-3">
              <label className="text-[15px]">Technology</label>
              <input
                type="checkbox"
                onChange={() => {
                  setShowTech(!showTech);
                }}
              />
            </div>
            {showTech && (
              <div className="flex flex-col gap-4">
                <DropDown
                  title="Favorite Programming Language"
                  list="Javascript,Java,Python,C++"
                  onChange={(value) => handleDropDownChange("tech", value)}
                />
                {errors.programming_language && (
                  <span className="flex flex-row  items-center gap-1 text-red-600">
                    <MdErrorOutline />
                    {errors.programming_language}
                  </span>
                )}
                <div className="flex flex-row gap-3">
                  <label className="text-[15px]">Experience</label>
                  <input
                    type="number"
                    onChange={(value) =>
                      handleDropDownChange("experience", value.target.value)
                    }
                    className="w-[70%] rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px]"
                  />
                </div>
                {errors.experience && (
                  <span className="flex flex-row  items-center gap-1 text-red-600">
                    <MdErrorOutline />
                    {errors.experience}
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-row gap-3">
              <label className="text-[15px]">Health Section</label>
              <input
                type="checkbox"
                onChange={() => {
                  setShowHealth(!showHealth);
                }}
              />
            </div>
            {showHealth && (
              <div className="flex flex-col gap-2">
                <DropDown
                  title="Exercise Frequency"
                  list="Daily,Weekly,Monthly,Rarely"
                  onChange={(value) =>
                    handleDropDownChange("exerciseFrequency", value)
                  }
                />
                {errors.exerciseFrequency && (
                  <span className="flex flex-row  items-center gap-1 text-red-600">
                    <MdErrorOutline />
                    {errors.exerciseFrequency}
                  </span>
                )}
                <DropDown
                  title="Diet Preference"
                  list="Vegetarian,Vegan,Non-Vegetarian"
                  onChange={(value) =>
                    handleDropDownChange("dietPreference", value)
                  }
                />
                {errors.dietPreference && (
                  <span className="flex flex-row  items-center gap-1 text-red-600">
                    <MdErrorOutline />
                    {errors.dietPreference}
                  </span>
                )}
              </div>
            )}
            <div className="flex flex-row gap-3">
              <label className="text-[15px]">Education</label>
              <input
                type="checkbox"
                onChange={() => {
                  setShowEducation(!showEducation);
                }}
              />
            </div>
            {showEducation && (
              <div>
                <div className="flex flex-col gap-2">
                  <DropDown
                    title="Education Level"
                    list="High School,Bachelor's,Master's,PhD"
                    onChange={(value) =>
                      handleDropDownChange("educationLevel", value)
                    }
                  />
                  {errors.educationLevel && (
                    <span className="flex flex-row  items-center gap-1 text-red-600">
                      <MdErrorOutline />
                      {errors.educationLevel}
                    </span>
                  )}
                </div>
                <div className="flex m-[10px_20px] flex-row gap-2">
                  <label className="text-[12px]">Field Of Study</label>
                  <input
                    type="text"
                    onChange={(value) =>
                      handleDropDownChange("field_of_study", value.target.value)
                    }
                    className="rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px]"
                  />
                </div>
                {errors.field_of_study && (
                  <span className="flex flex-row  items-center gap-1 text-red-600">
                    <MdErrorOutline />
                    {errors.field_of_study}
                  </span>
                )}
              </div>
            )}
            <label className="text-[20px]">Feedback :</label>
            <textarea
              className="border-none bg-[#202020] outline-none shadow-[0px_-2px_10px_rgba(0,0,0,1)] rounded-md text-white p-[10px]"
              name=""
              id=""
              onChange={(value) =>
                handleDropDownChange("feedback", value.target.value)
              }
            />
            {errors.feedback && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.feedback}
              </span>
            )}
            {errors.minfeedback && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.minfeedback}
              </span>
            )}
            <button
              onClick={handleSubmit}
              className="border-2 w-[30%] rounded-lg mx-auto my-2"
            >
              Submit
            </button>
          </div>
        </div>
        {showData && (
          <SummaryCard
            formData={selections}
            showTech={showTech}
            showHealth={showHealth}
            showEducation={showEducation}
            joke={apiData}
          ></SummaryCard>
        )}
      </section>
    </>
  );
};

export default Form;
