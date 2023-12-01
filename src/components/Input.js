const Input = ({ className, ...props }) => {
  return (
    <input
      className={`border border-slate-300 hover:border-gray-800 text-sm rounded-lg block w-full py-2.5 px-3 focus:border-gray-800 outline-none transition text-left ${
        className ? className : ""
      }`}
      {...props}
    />
  );
};

export default Input;