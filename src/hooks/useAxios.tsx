// import axios from "axios";
// import { useEffect, useState } from "react";

// type Data = any[]; 

// const useAxios = (url: string): [Data, Error | null, boolean] => {
//     const [data, setData] = useState<Data>([]);
//     const [error, setError] = useState<Error | null>(null);
//     const [loaded, setLoaded] = useState<boolean>(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoaded(true);
//                 const resp = await axios(url);
//                 setData(resp.data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoaded(false);
//             }
//         };

//         fetchData();
//     }, [url]);

//     return [data, error, loaded];
// };

// export default useAxios;
