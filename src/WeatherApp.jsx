import Search from "./Search";
import Info from "./Info";
import { useState } from "react";

export default function WeatherApp() {
  let [info, setInfo] = useState({});
  let getNewInfo = (newInfo) => {
    setInfo(newInfo);
  };
  return (
    <div>
      <Search getNewInfo={getNewInfo} />
      <Info info={info} />
    </div>
  );
}
