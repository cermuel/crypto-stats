import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosApi = () => {
  const [url, seturl] = useState("");
  useEffect(() => {
    axios.get("https://aws.random.cat/meow").then((url) => {
      seturl(url.data["file"]);
    });
  }, []);

  console.log(url);

  return <div>{url != "" && <img src={url} />}</div>;
};

export default AxiosApi;
