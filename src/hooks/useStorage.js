import { useState, useEffect } from "react";
import { projectStorage, db } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const storageRef = ref(projectStorage, "images/" + file.name);
        const collectionRef = collection(db, "images");
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (error) => {
                setError(error);
            },
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                await addDoc(collectionRef, {
                    url,
                    createdAt: serverTimestamp(),
                });
                setUrl(url);
                // console.log(docRef);
            }
        );
    }, [file]);

    return { progress, url, error };
};

export default useStorage;
