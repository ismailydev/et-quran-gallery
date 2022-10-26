import { useState } from "react";

import Header from "./Header";
import UploadForm from "./UploadForm";
import ImagesGrid from "./ImagesGrid";
import Modal from "./Modal";

const Home = () => {
    const [img, setImg] = useState(null);

    return (
        <section className="bg-body">
            <Header />
            <UploadForm />
            <ImagesGrid setImg={setImg} />
            {img && <Modal img={img} setImg={setImg} />}
        </section>
    );
};

export default Home;
