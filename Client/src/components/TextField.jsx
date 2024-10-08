const TextField = ({ label, name, cols, rows, value, onChange }) => {
  return (
    <>
      <div className="mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-800"
        >
          {label}
        </label>
        <textarea
          name={name}
          cols={cols}
          rows={rows}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-2 mt-2 text-black text-2xl bg-gradient-to-r from-blue-300 to-purple-300 border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </>
  );
};

export default TextField;
