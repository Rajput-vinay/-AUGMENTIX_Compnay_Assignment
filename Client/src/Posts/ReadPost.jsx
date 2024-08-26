/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import DeleteButton from "../components/Buttons/DeleteButton";
import UpdateButton from "../components/Buttons/UpdateButton";
import { useAuth } from "../context/Auth";
import useApi from "../hooks/useApi";
import AppServerErr from "../Errors/AppServerErr";

const ReadPost = ({ data }) => {
  const { setDData, fetchAgain, setFetchAgain } = useAuth();
  const { Delete, op } = useApi();
  const nav = useNavigate();

  const updateHandler = () => {
    nav(`/update/${data._id}`);
  };

  const deleteHandler = async () => {
    try {
      await Delete({ id: data._id });
      setDData((prevData) => prevData.filter((item) => item._id !== data._id));
      setFetchAgain((prev) => !prev);
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  return (
    <div className="w-96 bg-[#3a537e] m-5 p-5 text-white rounded-xl hover:shadow-xl hover:shadow-teal-400 hover:-translate-y-5 transition duration-500 ease-in-out flex flex-col">
      <div className="h-56 text-white">
        <h4 className="h-10 text-xl">{data.title}</h4>
        <hr />
        <div className="overflow-auto h-48 scrollBar">
          <p className="whitespace-pre-wrap mt-5">{data.description}</p>
        </div>
      </div>
      <AppServerErr>{op.appErr && op.appErr}</AppServerErr>
      <div className="mt-4 flex justify-between">
        <UpdateButton label="Update" onClick={updateHandler} />
        <DeleteButton label="Delete" onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default ReadPost;
