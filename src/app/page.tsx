
"use client"
import { useEffect, useState } from "react";
import axios from "axios";
interface data {
  id: number,
  name: string
}
const getData = async () => {
  return axios.get("http://localhost:8080/api/v1/list").then((response) => response.data);
}

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then(d => setData(d));

  }, [])
  return (

    <div className="space-y-4">
      <ul className="divide-y divide-gray-200">
        {data.map((ele: data, index: number) => (
          <li key={`${index}-${ele.id}`} className="py-4 flex">
            {/* <img className="h-10 w-10 rounded-full" src={ele.image} alt="" /> */}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{ele.name}</p>
              {/* <p className="text-sm text-gray-500">{ele.email}</p> */}
            </div>
          </li>
        ))}
      </ul>



    </div>



  );
}
