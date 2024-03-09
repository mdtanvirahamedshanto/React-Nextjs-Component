import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const textBlocksInitial = [
    "প্রিয় জনাব/জনাবা,",
    "আপনাকে লাল টুকটুকে ফুটন্ত একটি গোলাপের শুভেচ্ছা দিয়ে শুরু করছি আমার এই পত্র।",
    "আশা করি, আল্লাহর রহমাতে আপনি ভালো আছেন।",
    "আমাদের দুজনের পরিবার, সমাজ, আমাদের নিজস্ব কর্মজীবন— এসব বিষয়গুলো আমাদের ভেবেচিন্তে সিদ্ধান্ত নিতে হবে। তাড়াহুড়ো করে কিছু করা আমাদের জন্য ক্ষতিকর হতে পারে।",
    "আমাদের এই ভালোবাসা সব বাধা অতিক্রম করতে পারবে— এই বিশ্বাস আমার।",
    "আমি জানি, আপনি খুব সাহসী। আপনি অবশ্যই আপনার জীবনে সাফল্য অর্জন করবেন। ",
    "আমি আপনাকে অনেক ভালোবাসি। আপনার জন্য আমার অপেক্ষা চলবে।",
    "ইতি, আপনারই আশিক।",
    "এই লেখাটি গুগল বার্ড দিয়ে লেখা।",
    // Add more text blocks as needed
  ];

  const [textBlocks, setTextBlocks] = useState(textBlocksInitial);

  const [typedBlocks, setTypedBlocks] = useState([]);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     // Redirect to login page if token is not available
  //     navigate("/login");
  //   } else {
  //     // just check for localStorage JWT token valid or not
  //     fetch(`https://pg-backend-nine.vercel.app/giftdata`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch messages data");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching messages:", error);
  //         navigate("/login");
  //       });
  //   }
  // }, [navigate]);

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        let currentTextBlock = textBlocks[currentBlockIndex];

        if (currentText.length < currentTextBlock.length) {
          setCurrentText(currentTextBlock.slice(0, currentText.length + 1));
        } else {
          if (currentBlockIndex === textBlocks.length - 1) {
            setIsTyping(false); // Stop typing if it's the last block
          } else {
            setCurrentText(""); // Clear current text for the next block
            setCurrentBlockIndex((prevIndex) => prevIndex + 1); // Move to the next block
          }
          setTypedBlocks([...typedBlocks, currentText]); // Add the typed block to typedBlocks
        }
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentBlockIndex, isTyping, textBlocks, typedBlocks]);

  return (
    <div className="h-screen flex justify-center bg-black text-white">
      <div className="w-full md:max-w-md lg:max-w-lg m-2 bg-gray-800 p-6 md:p-8 border border-gray-300 rounded-lg shadow-md">
        <div className="text-base md:text-lg lg:text-xl font-serif leading-relaxed text-white my-4">
          <div
            style={{
              minHeight: "30em",
              maxHeight: "60em",
              overflowY: "auto",
              color: "#0EACEE",
              fontSize: "14px",
              lineHeight: "1.5",
              fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
              fontWeight: 400,
            }}
          >
            {typedBlocks.map((block, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                {block}
              </div>
            ))}
            {isTyping && (
              <div
                style={{
                  marginBottom: "1rem",
                }}
              >
                {currentText}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
