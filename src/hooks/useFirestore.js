import { useEffect, useState } from "react";
import {
    // getDocs,
    collection,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase/config";

const useFirestore = (colName) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, colName);
        // const getData = async () => {
        //     // const data = await getDocs(collectionRef);
        //     const q = query(collectionRef, orderBy("createdAt", "desc"));
        //     const allDocs = await getDocs(q);
        //     setData(allDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //     // console.log(allDocs);
        // };
        // getData();

        const q = query(collectionRef, orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snap) => {
            // console.log(snap);
            setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });

        return () => unsub();
    }, [colName]);

    return { data };
};

export default useFirestore;
