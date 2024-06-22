import React, { useEffect, useState,  } from "react";
import profile from "../../assets/ali.png";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";
import {server} from "../../server"
import axios from "axios"
import {useSelector} from "react-redux"

const ENDPOINT = "http://localhost:4000/";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const ShopChat = () => {

   const {shop}= useSelector((state)=> state.seller)

  const [arrivalMessage, setArivalMessage] = useState(null);
  const [Messages, setMessages] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);


  useEffect(()=>{
    const messageList = axios.get(
      `${server}/inbox/get-all-conversation-seller`
    );
    console.log(messageList)
  })

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  },[arrivalMessage,currentChat]);

  return (
    <div className="w-[90%] bg-gray-200 m-5 h-[85vh] overflow-y-scroll rounded">
      <h1 className="text-center text-[30px] font-Poppins py-3">
        All Messages
      </h1>

      {/* all messages list */}

      <MessageList />
    
    </div>
  );
};

const MessageList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/message");
  };

  return (
    <div
      className="w-full flex p-3 cursor-pointer px-3  bg-white"
      onClick={handleClick}
    >
      <div className="relative">
        <img src={profile} alt="" className="h-[50px] w-[50px] rounded-full" />
        <div className="w-[12px] h-[12px] absolute bg-green-600 rounded-full top-[2px] right-[2px]" />
      </div>
      <div className="pl-3">
        <h1 className="text-[19px] text-black">Shahraiz Ali</h1>
        <p className="text-[16px] text-gray-900">
          you:- Yeh i'm too much busy now a day's....
        </p>
      </div>
    </div>
  );
};

export default ShopChat;
