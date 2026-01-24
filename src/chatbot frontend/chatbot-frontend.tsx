import { useState, useRef, useEffect } from "react";
import styles from "./chatbot.module.css"

import { HiOutlineSparkles,  } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { LuSend } from "react-icons/lu";


// need scrolldown effect when message is sent
interface MessagesType{
    id: number;
    text:string;
    sender:string;
    timestamp: Date;
}

export default function Chat(){

    const [isOpenWebChat, setOpenWebChat] = useState(false);

    // quickreplies
    const [inputValue, setInputValue] = useState("");

    // const toggleOpenChat= () =>{
    //     setOpenWebChat(!isOpenWebChat)
    // }

    const formatTime = (date:Date) => {
        return date.toLocaleTimeString('en-US',
            {
                hour: "numeric",
                minute:'2-digit',
                hour12:true,
            }
        )
    }

    const getGreeting= () =>{
        const hour = new Date().getHours();

        if (hour < 12){ return 'Good Morning,'}
            else if (hour <18) {return 'Good Afternoon,'}
                else {return 'Good Evening,'}
    }

    const inputRef = useRef<HTMLInputElement>(null);

    // scrolls down when new messages are sent
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    // useEffect to implement

    
    // quickreplies button handlr
    const handleQuickreply = (text:string) =>{
        setInputValue(text);
        inputRef.current?.focus();
    }



    return(
        <>
        {/*open chat button */}
        {!isOpenWebChat && (
            <button
                onClick={() => setOpenWebChat(true)}
                className={styles.toggleButton}
            >
                <HiOutlineSparkles size={30}/>
            </button>
        )}
        
        {/* actual chat window */}
        {isOpenWebChat && (
            <div className={styles.chatWindow}>
                {/* header */}
                <div className={styles.chatHeader}>
                    <div className={styles.headerContent}>
                        <img src="/public/ACM Orange 6 compressed square.jpg" className={styles.ACMlogo}/>
                        <div className={styles.headerText}>
                            <h3>ACM assistant</h3>
                            <p>Here to help you!</p>
                        </div>

                    </div>
                    <button 
                        className={styles.closeChatButton}
                        onClick={() => setOpenWebChat(false)}
                        >
                            <MdOutlineClose size={20}/>
                    </button>
                </div>

                {/*body */}
                <div className={styles.messagesContainer}>
                    <div className={styles.messagesContent}>
                        <div className={styles.greetingBlock}>
                            {/*ill figure out how to change to "good morning" l8r */}
                            <h3>
                                {getGreeting()}
                            </h3>
                            <h3>
                                How can I help out?
                            </h3>
                            <p>
                                 {new Date().toLocaleDateString('en-US', {weekday:'long'})}, {formatTime(new Date())}
                            </p>
                        </div>

                        
                        
                    </div>


                </div>


                {/* input area*/}
                <div className={styles.inputArea}>
                    <div className={styles.inputWrapper}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask me anything"
                            className={styles.chatInput}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}

                        />
                        <button
                            className={styles.sendButton}
                            
                        >
                            <LuSend/>
                        </button>
                    </div>
                </div>

                {/* quick replies */}
                <div className={styles.quickReplies}>
                    <p className={styles.quickRepliesLabel}>Quick Replies</p>
                    <div className={styles.quickRepliesButtonContainer}>
                        <button 
                            className={styles.quickRepliesButtons}
                            onClick={()=> handleQuickreply("What events are coming up?")}
                        >
                            <HiOutlineSparkles size={12}/>
                            View events
                        </button>
                        <button 
                            className={styles.quickRepliesButtons}
                            onClick={()=> handleQuickreply("How do I join ACM?")}
                        >
                            <HiOutlineSparkles size={12}/>
                            How to join
                        </button>
                        <button 
                            className={styles.quickRepliesButtons}
                            onClick={()=> handleQuickreply("What projects does ACM work on?")}
                        >
                            <HiOutlineSparkles size={12}/>
                            Projects
                        </button>
                    </div>
                    
                </div>


            </div>
        )}

        </>
)}