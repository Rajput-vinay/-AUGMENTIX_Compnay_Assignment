const Heading = ({ label }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-white bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 uppercase">
        {label}
      </h1>
    </>
  );
};

export default Heading;
