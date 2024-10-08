import { useNavigate } from "react-router";
import { useAuth } from "../context/Auth";
import DeleteButton from "./Buttons/DeleteButton";
import Heading from "./Heading";
import useApi from "../hooks/useApi";

const NavBar = () => {
  const { setUser, setDData } = useAuth();
  const nav = useNavigate();
  const { Logout, op } = useApi();

  const logoutHandler = () => {
    Logout();
    setUser("");
    setDData([]);
    if (!op?.loading) nav("/auth");
  };

  return (
    <div className="h-14 flex items-center bg-gradient-to-r from-blue-500 to-green-500 sticky top-0 z-20 shadow-lg">
      <div className="flex-grow ms-10 ps-16">
        <Heading label={"My Posts"} size={3} />
      </div>
      <div className="me-5 mb-4">
        <DeleteButton label={"Logout"} onClick={logoutHandler} />
      </div>
    </div>
  );
};

export default NavBar;
