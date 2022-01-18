import useFirestore from "../hooks/useFirestore";
import Image from "./Image";
import { motion } from "framer-motion";

const ImagesGrid = ({ setImg }) => {
    const { data } = useFirestore("images");
    // console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-secondary w-3/4 mx-auto my-5">
            {data &&
                data.map((doc, i) => (
                    <motion.div
                        key={doc.id}
                        layout
                        transition={{ ease: "easeInOut" }}
                        whileHover={{
                            opacity: 1,
                        }}
                    >
                        <Image key={i} doc={doc} setImg={setImg} />
                    </motion.div>
                ))}
        </div>
    );
};

export default ImagesGrid;
