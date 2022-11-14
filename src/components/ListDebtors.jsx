import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import Firebase from "../Firebase";
import { FaRegTimesCircle } from "react-icons/fa";
const ListDebtors = () => {
  // const ref = Firebase.firestore().collection("list-debtors");
  // console.log(ref);
  const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const [debt, setUserDebt] = useState();
  const [borrowing, setBorrowing] = useState();
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(2);
  const userDebt = useRef();
  const userBorrowing = useRef();

  useEffect(() => {
    const showUser = async () =>
      setUser(await (await axios.get("./json/users.json")).data);
    showUser();
  }, []);

  const handleDebt = () => {
    userDebt.current.classList.toggle("debt-active");
    document.getElementById("user-name").value = "";
    document.getElementById("debt").value = "";
  };
  const handleBorrowing = () => {
    userBorrowing.current.classList.toggle("borrowing-active");
    document.getElementById("user-borrowing-name").value = "";
    document.getElementById("borrowing").value = "";
  };
  const handlePushUser = (newUser) => {
    setUser([...user, newUser]);
    setIndex((prev) => prev + 1);
  };

  if (!user) return null;
  return (
    <div className="relative w-full min-h-screen">
      <div className="w-full min-h-screen flex flex-col justify-evenly items-center px-4">
        <div className="flex w-full justify-between gap-3 px-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg active:bg-green-600"
            onClick={handleDebt}
          >
            Qarz Berish
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg active:bg-blue-600"
            onClick={handleBorrowing}
          >
            Qarz Olish
          </button>
          <input
            type="search"
            name="search"
            id="search"
            className="border border-black rounded-md py-2 px-4 outline-none"
            placeholder="Qidiruv tizimi"
          />
        </div>
        <table className="table-auto w-full max-w-[700px]">
          <thead>
            <tr className="border">
              <th className="py-3">№</th>
              <th>Ism</th>
              <th>Qarzdorlik miqdori</th>
              <th>Qarzlar miqdori</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {user.map((user) => (
              <tr className="border" key={user.id}>
                <td className="py-2">{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.userDebt ? user.userDebt : "Qarzingiz yo'q"}</td>
                <td>{user.borrowing ? user.borrowing : "Qarz berilmagan"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="debt w-full min-h-screen absolute top-0 left-0 bg-black/90 flex justify-center items-center"
        ref={userDebt}
      >
        <div className="w-[600px] min-h-[80vh] bg-white relative flex flex-col justify-center items-center gap-8">
          <button
            className={
              "text-4xl text-white absolute top-2 right-2 rounded-full bg-green-500 hover:bg-green-600"
            }
            onClick={handleDebt}
          >
            <FaRegTimesCircle />
          </button>
          <input
            type="text"
            placeholder="Qarzdor Ismi"
            id="user-name"
            className="border border-black rounded-md p-2 outline-none w-[80%]"
            onChange={(e) => {
              setUserName(e.target.value);
              setError(false);
            }}
          />
          <input
            type="text"
            placeholder="Narxni kiriting"
            id="debt"
            className="border border-black rounded-md p-2 outline-none w-[80%]"
            onChange={(e) => {
              setUserDebt(e.target.value);
              setError(false);
            }}
          />
          <button
            className="bg-green-500 py-2 px-4 text-white rounded-md hover:bg-green-600"
            onClick={() => {
              if (userName && debt) {
                handlePushUser({
                  id: index,
                  userName: userName,
                  userDebt: debt,
                  borrowing: null,
                });
                handleDebt();
              } else {
                setError(true);
              }

              setUserName("");
              setBorrowing("");
            }}
          >
            Tasdiqlash
          </button>
          {error && <div>malumotlarni kiriting</div>}
        </div>
      </div>
      <div
        className="borrowing w-full min-h-screen absolute top-0 left-0 bg-black/90 flex justify-center items-center"
        ref={userBorrowing}
      >
        <div className="w-[600px] min-h-[80vh] bg-white relative flex flex-col justify-center items-center gap-8">
          <button
            className={
              "text-4xl text-white absolute top-2 right-2 rounded-full bg-blue-500 hover:bg-blue-600"
            }
            onClick={handleBorrowing}
          >
            <FaRegTimesCircle />
          </button>
          <input
            type="text"
            placeholder="Qarz beruvchi ismi"
            id="user-borrowing-name"
            className="border border-black rounded-md p-2 outline-none w-[80%]"
            onChange={(e) => {
              setUserName(e.target.value);
              setError(false);
            }}
          />
          <input
            type="text"
            placeholder="Narxni kiriting"
            id="borrowing"
            className="border border-black rounded-md p-2 outline-none w-[80%]"
            onChange={(e) => {
              setBorrowing(e.target.value);
              setError(false);
            }}
          />
          <button
            className="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600"
            onClick={() => {
              if (userName && borrowing) {
                handlePushUser({
                  id: index,
                  userName: userName,
                  userDebt: null,
                  borrowing: borrowing,
                });
                handleBorrowing();
              } else {
                setError(true);
              }

              setUserName("");
              setBorrowing("");
            }}
          >
            Tasdiqlash
          </button>
          {error && <div>malumotlarni kiriting</div>}
        </div>
      </div>
    </div>
  );
};

export default ListDebtors;
