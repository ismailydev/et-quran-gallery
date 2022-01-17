import { motion } from "framer-motion";

const Modal = ({ img, setImg }) => {
    // console.log(img);

    const handleClick = (e) => {
        if (e.target.localName === "div") {
            setImg(null);
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            className="bg-[#000000bd] overflow-hidden fixed flex items-center justify-center top-0 left-0 w-full h-full bg-"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.5 }}
                className="max-w-[95%] max-h-[95%] md:max-w-[80%] md:max-h-[80%] border-4 border-white shadow-sm"
                src={img}
                alt=""
            />
        </motion.div>
    );
};

export default Modal;
