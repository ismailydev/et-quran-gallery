import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    console.log(url, progress);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
            className="text-secondary bg-primary h-1 text-center"
        ></motion.div>
    );
};

export default ProgressBar;
