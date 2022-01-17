import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Image = ({ doc, setImg }) => {
    // const [likes, setLikes] = useState(0);

    // const handleLikes = () => {
    //     // console.log(likes);
    //     setLikes((prevLikes) => setLikes(prevLikes + 1));
    // };
    return (
        <motion.div
            className={`relative ${
                doc ? "bg-primary" : "bg-transparent"
            } opacity-80`}
            key={doc.id}
            whileHover={{
                opacity: 1,
            }}
        >
            <div className="aboslute top-0 left-0 transition-all ease-in-out hover:translate-x-2 hover:-translate-y-2">
                <motion.img
                    className="min-w-full max-h-full"
                    src={doc.url}
                    alt=""
                    onClick={() => setImg(doc.url)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
                {/* <div
                    className="absolute cursor-pointer flex items-center gap-2 bg-transparent px-3 py-1 bottom-0 right-0"
                    onClick={handleLikes}
                >
                    <FaHeart />
                    {likes}
                </div> */}
            </div>
        </motion.div>
    );
};

export default Image;
