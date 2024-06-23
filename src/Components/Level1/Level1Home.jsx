import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import useValidateForm from "./useValidateForm";
const Level1Home = () => {
  const [showGuest, setShowGuest] = useState(false);
  const [showData, setShowData] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    guest: "",
  });
  const [errors, setErrors] = useState({});
  const submitForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = useValidateForm(formData, showGuest);
  const handleSubmit = () => {
    setErrors(validateForm);
    if (Object.keys(validateForm).length === 0) {
      setShowData(true);
    }
  };

  return (
    <>
      <section className="bg-[#121212] flex gap-5 justify-center py-[5rem]">
        <div className="flex  bg-[#1d1d1d] rounded-lg justify-center p-[50px_20px] shadow-[0_-2px_10px_rgba(0,0,0,1)] w-[40%]">
          <div className="flex w-[90%]  flex-col gap-2 text-white ">
            <div className="flex flex-row gap-2">
              <label className="w-[15%] text-[20px]">Name</label>
              <input
                value={formData.name}
                name="name"
                onChange={submitForm}
                type="text"
                className="rounded-md bg-opacity-100 bg-[#202020] outline-none w-[70%] shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px] "
              />
            </div>
            {errors.name && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.name}
              </span>
            )}
            <div className="flex flex-row gap-2">
              <label className=" w-[15%] text-[20px]">Email</label>
              <input
                value={formData.email}
                name="email"
                onChange={submitForm}
                type="email"
                className="w-[70%] rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px] "
              />
            </div>
            {errors.email && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.email}
              </span>
            )}
            <div className="flex flex-row gap-2">
              <label className="w-[15%]  text-[20px]">Age</label>
              <input
                value={formData.age}
                name="age"
                onChange={submitForm}
                type="text"
                className="w-[70%] rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px] "
              />
            </div>
            {errors.age && (
              <span className="flex flex-row  items-center gap-1 text-red-600">
                <MdErrorOutline />
                {errors.age}
              </span>
            )}
            <div className="flex flex-row gap-2">
              <label className="text-[20px]">
                Are you attending with a guest?
              </label>
              <input
                type="checkbox"
                onChange={() => {
                  setShowGuest(!showGuest);
                }}
                className="rounded-md bg-opacity-100  outline-none  flex p-[5px_10px] "
              />
            </div>
            {showGuest && (
              <>
                <div className="flex flex-row gap-2">
                  <label className="w-[15%]  text-[20px]">Guest</label>
                  <input
                    value={formData.guest}
                    name="guest"
                    onChange={submitForm}
                    type="text"
                    className="w-[70%] rounded-md bg-opacity-100 bg-[#202020] outline-none shadow-[0_-2px_10px_rgba(0,0,0,1)] flex p-[5px_10px] "
                  />
                </div>
                <div>
                  {errors.guest && (
                    <span className="flex flex-row  items-center gap-1 text-red-600">
                      <MdErrorOutline />
                      {errors.guest}
                    </span>
                  )}
                </div>
              </>
            )}
            <button
              onClick={handleSubmit}
              type="submit"
              className="border-2 w-[20%] rounded-md mx-auto my-2"
            >
              Submit
            </button>
          </div>
        </div>

        {showData && (
          <div className="w-[30%] bg-[#1d1d1d] rounded-md shadow-[0px_-2px_10px_rgba(0,0,0,1)]">
            <div className="m-[20px] text-white flex flex-col">
              <span className="">Name : {formData.name}</span>
              <span>Email : {formData.email}</span>
              <span>Age : {formData.name}</span>
              {showGuest && <span>Guest : {formData.guest}</span>}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Level1Home;
