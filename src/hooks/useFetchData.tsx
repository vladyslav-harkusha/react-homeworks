import {useEffect, useState} from "react";

export const useFetchData = <T,>(url: string) => {
    const [dataFromServer, setDataFromServer] = useState<T>();

    useEffect(() => {
        const getDataFromServer = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataFromServer(data);
            } catch (e) {
                console.log(e);
            }
        }

        getDataFromServer();
    }, []);

    return dataFromServer;
}