import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase.js";
import { FaInbox, FaShare } from "react-icons/fa";
import { IoPaperPlaneSharp } from "react-icons/io5";

const Contacto = () => {
  const [Emails, setEmails] = useState([]);

  const [OpenMail, setOpenMail] = useState(true);

  const handleOpenMail = () => {
    setOpenMail(false);
  };

  const handleClosenMail = () => {
    setOpenMail(true);
  };

  useEffect(() => {
    const GetData = async () => {
      try {
        const data = await db.collection("tarea").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setEmails(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    GetData();
  }, []);

  const [Email, setEmail] = useState("");

  const HandleAdd = async (e) => {
    e.preventDefault();
    if (!Email.trim()) {
      console.log("sin texto");
      return;
    }
    try {
      const newEmail = {
        name: Email,
        fecha: Date.now(),
      };
      const data = await db.collection("tarea").add(newEmail);

      setEmails([...Emails, { id: data.id, ...newEmail }]);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
    console.log(Email);
  };

  const handleChange = (e) => setEmail(e.target.value);

  return (
    <div
      className="font-mono pb-72 bg-gradient-to-bl from-red-300 via-purple-600 lg:h-full md:h-full sm:h-screen lg:w-screen md:w-screen sm:w-screen lg:py-20 md:pb-30 sm:pb-96 to-red-600 "
      id="Contact"
    >
      <h1 className="font-sans text-center text-white text-4xl py-20 ">
        Contact
      </h1>
      {OpenMail ? (
        <div className="contacto relative resize h-96 sm:h-full lg:w-7/12 sm:w-4/5 md:w-4/5  lg:mx-auto md:mx-auto sm:mx-auto rounded-lg bg-gray-50 bg-opacity-30 shadow-2xl ">
          <div className=" rounded-t-lg h-15 py-3 flex justify-start gap-1  items-center bg-gray-100 bg-opacity-30 ">
            <div
              className="animate-pulse cursor-pointer text-white absolute -top-5 	 -right-2 h-8 w-8 text-center rounded-full bg-red-600"
              onClick={handleOpenMail}
            >
              <span className=" align-middle text-center text-white font-bold">
                {Emails.length}
              </span>
            </div>
            <div className="ml-2 z-0 rounded-full h-4 w-4 bg-red-600 opacity-100"></div>
            <div className="z-0 rounded-full h-4 w-4 bg-yellow-500 opacity-100"></div>
            <div className="z-0 rounded-full h-4 w-4 bg-green-600 opacity-100"></div>
          </div>
          <div>
            <div className="">
              <div className="px-5 py-2 flex items-center justify-between text-blue-400 border-b border-fuchsia-600 border-opacity-40 ">
                <h5 className="w-full text-white text-base resize-none outline-none h-7 bg-transparent">
                  To:{" "}
                  <span className="shadow text-sm rounded-full px-3 py-1 bg-blue-700">
                    lrodrigoespinoza@...
                  </span>
                </h5>
              </div>
              <div className="px-5 py-3 flex items-center justify-between text-blue-400 border-b border-fuchsia-600 border-opacity-40 ">
                <input
                  placeholder="From: "
                  type="email"
                  className="w-full text-white text-xl resize-none outline-none h-6 bg-transparent"
                ></input>
              </div>
              <div className="px-5 flex items-center justify-between text-blue-400 border-b border-fuchsia-600 border-opacity-40">
                <input
                  placeholder="Subject"
                  type="text"
                  value={Email}
                  onChange={handleChange}
                  className=" font-bold	w-full py-4 text-white text-lg resize-none outline-none h-2 bg-transparent placeholder-opacity-100"
                ></input>
              </div>
              <div className="flex p-4">
                <div className=" flex flex-col w-full">
                  <textarea
                    placeholder="What's happening?"
                    className="w-full ml-0 text-white text-xl resize-none outline-none h-24 bg-transparent"
                  ></textarea>
                </div>
              </div>
              <div className=" justify-between py-6 px-4 border-t border-fuchsia-600 border-opacity-40">
                <div>
                  <button
                    onClick={HandleAdd}
                    className=" shadow inline px-4 py-3 rounded-full font-bold text-white bg-red-600 cursor-pointer hover:from-pink-500 hover:to-yellow-500"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="contacto relative resize  h-full lg:w-7/12 sm:w-4/5 md:w-4/5  lg:mx-auto md:mx-auto sm:mx-auto rounded-lg bg-gray-50 bg-opacity-30 shadow-2xl ">
          <div className=" rounded-t-lg h-15 py-3 flex justify-start gap-1  items-center bg-gray-100 bg-opacity-30 ">
            <div className="ml-2 z-0 rounded-full h-4 w-4 bg-red-600 opacity-100"></div>
            <div className="z-0 rounded-full h-4 w-4 bg-yellow-500 opacity-100"></div>
            <div className="z-0 rounded-full h-4 w-4 bg-green-600 opacity-100"></div>
          </div>
          <div className="grid grid-rows grid-flow-col gap-1">
            <ul className="m-1 row-span-3 bg-gray-100 rounded-lg opacity-50">
              <div className="mt-9">
                <li className="flex bg-gray-300 rounded-lg p-5 m-3">
                  <FaInbox className="m-1" /> Inbox{" "}
                </li>
                <li className="flex bg-gray-300 rounded-lg p-5 m-3">
                  <IoPaperPlaneSharp className="m-1" />
                  <button onClick={handleClosenMail}>Send</button>
                </li>
              </div>
            </ul>
            <ul className="m-1 overflow-auto">
              <div className="flex justify-between">
                <div>
                  <li className="text-black font-bold">
                    {" "}
                    Inbox <FaInbox />
                  </li>
                  <p className="text-white opacity-50">
                    {Emails.length} messages
                  </p>
                </div>
                <button onClick={handleClosenMail}>
                  <FaShare className="mr-5" />
                </button>
              </div>
              <hr />
              {Emails.map((item) => (
                <li
                  className="lg opacity-50 text-white bg-gray-300 border-4 border-6 border-indigo-200 rounded-lg p-1 m-1"
                  key={item.id}
                >
                  <p>Re:{item.name}</p>
                  <p>To: lrodr@ddd.com</p>
                  <p>Date:{item.fecha}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacto;
