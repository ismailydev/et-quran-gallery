import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ["image/jpeg", "image/png"];

    const changeHandler = (e) => {
        // console.log(e.target.files[0]);
        const selected = e.target.files[0];
        setFile(null);
        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError(false);
        } else {
            setError(true);
            setFile(null);
        }
    };
    return (
        <div className="">
            <form className="relative container flex justify-center items-center gap-4 w-2/3 md:w-1/3 mx-auto py-4">
                <label className="mx-auto m-4">
                    <input
                        type="file"
                        onChange={changeHandler}
                        className="hidden"
                    />
                    <span className="bg-primary py-2 px-4 transition-all ease-in-out cursor-pointer hover:bg-transparent hover:border hover:text-primary hover:border-primary">
                        Upload
                    </span>
                </label>
                {error && (
                    <div className="absolute w-full top-[4.5rem] left-1/2 -translate-x-1/2 text-sm text-center text-error">
                        Invalid Format (Please select a jpeg/png file)
                    </div>
                )}
            </form>
            <div className="w-3/4 mx-auto">
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </div>
    );
};

export default UploadForm;
