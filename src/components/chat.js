import { connect } from 'react-redux'
import actions from '../redux/actions'
import React, { useEffect, useState, useRef } from 'react'
import { Card } from 'react-bootstrap';
import '../components/chat.css'
import Cropper from 'react-easy-crop'
import socketIOClient, { Socket } from 'socket.io-client'
import { open } from 'fs';



// const ENDPOINT = "http://localhost:3002"

export default function Chat(props) {
    const [messages, setMessages] = useState([])
    const [oneMessage1, setOneMessage1] = useState('')
    const ref = useRef()

    // const sendMessage = (ms) => {



    const inputEnter = document.getElementById("inputText")
    window.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            // console.log('enter',oneMessage);
            debugger
            console.log(oneMessage1);
            socket.emit('sendMessage', oneMessage1)
        }
    });
    // }

    function CloseOrOpenChat(e) {
        const chatStatus = document.getElementById('chat-content')
        if (chatStatus.style.display == 'none')
            chatStatus.style.display = 'block'
        else
            chatStatus.style.display = 'none'
    }
    var socket = socketIOClient('http://localhost:3002', { transports: ['websocket'] });

    // const socket = socketIOClient(ENDPOINT)
    useEffect(() => {
        let messageTemp = []
        socket.on('connect', () => {
            console.log(socket);
            console.log('connect');
        })
        socket.on('message', (message) => {
            // console.log(socket);
            console.log(message);
            messageTemp = [...messages]
            messageTemp.push(message)
            setMessages(messageTemp)
        })
        // if (!open && ref.current) { ref.current.focus(); }

    }, [])
    return (
        <>


            <div className="container" id="container"> <div className="row pt-3">

                <div className="chat-main">
                    <div className="col-md-12 chat-header">
                        <div className="row header-one text-white p-1" onClick={CloseOrOpenChat} >
                            <div className="col-md-6 name pl-2">
                                <i className="fa fa-comment"></i>
                                <h6 className="ml-1 mb-0">Ketty Peris</h6>
                            </div>
                            <div className="col-md-6 options text-right pr-0">
                                <i className="fa fa-window-minimize hide-chat-box hover text-center pt-1"></i>
                                <p className="arrow-up mb-0">
                                    <i className="fa fa-arrow-up text-center pt-1"></i>
                                </p>
                                <i className="fa fa-times hover text-center pt-1" ></i>
                            </div>
                        </div>
                        <div className="row header-two w-100">
                            <div className="col-md-6 options-left pl-1">
                                <i className="fa fa-video-camera mr-3"></i>
                                <i className="fa fa-user-plus"></i>
                            </div>
                            <div className="col-md-6 options-right text-right pr-2">
                                <i className="fa fa-cog"></i>
                            </div>
                        </div>
                    </div>
                    <div className="chat-content" id="chat-content">

                        <div className="col-md-12 chats pt-3 pl-2 pr-3 pb-3">
                            {!messages &&
                                messages.map(msg =>
                                (
                                    <ul className="p-0" >
                                        <li className="send-msg float-right mb-2">
                                            <p className="pt-1 pb-1 pl-2 pr-2 m-0 rounded">
                                                {msg}
                                            </p>
                                        </li>
                                        <li className="receive-msg float-left mb-2" >
                                            <div className="sender-img">
                                                <img src="http://nicesnippets.com/demo/image1.jpg" className="float-left" />
                                            </div>
                                            <div className="receive-msg-desc float-left ml-2">
                                                <p className="bg-white m-0 pt-1 pb-1 pl-2 pr-2 rounded">
                                                    <br />
                                                    {msg}<br />
                                                </p>
                                                <span className="receive-msg-time">ketty, Jan 25, 6: 20 PM</span>
                                            </div>
                                        </li>
                                        {/* <li className="send-msg float-right mb-2">
                                            <p className="pt-1 pb-1 pl-2 pr-2 m-0 rounded">
                                                <br />
                                               
                                            </p>
                                        </li> */}
                                        {/* <li className="receive-msg float-left mb-2">
                                            <div className="sender-img">
                                                <img src="http://nicesnippets.com/demo/image1.jpg" className="float-left" />
                                            </div>
                                            <div className="receive-msg-desc float-left ml-2">
                                                <p className="bg-white m-0 pt-1 pb-1 pl-2 pr-2 rounded">
                                                    Yes always
                                                </p>
                                            </div>
                                        </li> */}
                                        <li className="send-msg float-right mb-2">
                                            <p className="pt-1 pb-1 pl-2 pr-2 m-0 rounded">
                                                <a href="https://nicesnippets.com/" className="text-dark rounded" target="_blank"><u>https://nicesnippets.com/</u></a>
                                            </p>
                                        </li>
                                        <li className="send-msg float-right mb-2">
                                            <p className="pt-1 pb-1 pl-2 pr-2 m-0 rounded">
                                                Byy
                                            </p>
                                            <span className="send-msg-time">1 min</span>
                                        </li>
                                    </ul>
                                ))}
                        </div>

                        <div className="col-md-12 p-2 msg-box border border-primary">
                            <div className="row">
                                <div className="col-md-2 options-left">
                                    <i className="fa fa-smile-o"></i>
                                </div>
                                <div className="col-md-7 pl-0">
                                    <input type="text" id="inputText" className="border-0" placeholder=" Send message" onChange={e => { setOneMessage1(e.target.value)
                                      
                                       
                                    }} />
                                </div>
                                <div className="col-md-3 text-right options-right">
                                    <i className="fa fa-picture-o mr-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div >

            </div >

        </>

    )
}
