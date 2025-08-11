import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="flex justify-center gap-6 mt-4">
      {genders.map((gender) => {
        const isSelected = selectedGender === gender.value;

        return (
          <label
            key={gender.value}
            className={`flex items-center gap-2 px-5 py-2 border rounded-lg cursor-pointer transition-all duration-200
              ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 border-blue-500 shadow-lg"
                  : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-gray-700 hover:border-blue-400"
              }
            `}
          >
            <input
              type="radio"
              name="gender"
              value={gender.value}
              checked={isSelected}
              onChange={() => onCheckboxChange(gender.value)}
              className="hidden"
            />
            <span
              className={`text-sm font-medium ${
                isSelected ? "text-white" : "text-gray-200"
              }`}
            >
              {gender.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default GenderCheckbox;
