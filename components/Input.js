import React from "react";

function Input({ text, type, placeholder, className, value, onChange, name, required }) {
  return (
    <div className={`${className} group my-4`}>
      <span className="text-sm text-[#8d8d8d] group-focus-within:text-black dark:group-focus-within:text-white transition-all duration-200 dark:text-[#FF7F0D]">
        {text}
      </span>
      <div className="border-b focus-within:border-black dark:group-focus-within:text-white dark:border-white transition-all duration-200">
        <input
          type={type}
          name={name}
          aria-label={text}
          placeholder={placeholder}
          className="outline-hidden border-none w-full bg-transparent p-2 dark:text-white"
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}

export default Input;
