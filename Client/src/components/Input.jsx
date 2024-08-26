const Input = ({ label, type, name, value, onChange }) => {
  return (
    <>
      <div className="mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-800"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="block w-full px-4 py-2 mt-2 text-black text-xl bg-gradient-to-r from-blue-300 to-purple-300 border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
