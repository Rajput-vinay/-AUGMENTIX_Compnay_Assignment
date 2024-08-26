const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gradient-to-r from-teal-500 to-blue-600 fixed bottom-0 py-4 w-full">
        <p className="text-lg text-center text-white">
          Copyright &copy; Rajput-vinay | {year}
        </p>
      </footer>
    </>
  );
};

export default Footer;
