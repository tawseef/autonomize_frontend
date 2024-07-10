/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./display.style.css";
import Card from "../displayCard/card";
import axios from "axios";
import BannerCard from "../bannerCard/bannerCard";

// export const API = "http://localhost:8082/v1/users";
// export const FriendAPI = "http://localhost:8082/v1/friend";

export const API = "https://autonomize-backend-llar.onrender.com/v1/users";
export const FriendAPI = "https://autonomize-backend-llar.onrender.com/v1/friend";

function Display() {
  const [dataInp, setDataInp] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiFriendData, setApiFriendData] = useState([]);
  const [banner, setBanner] = useState(false);
  const [bannerData, setBannerData] = useState([]);

  const handleBanner = (element) => {
    setBannerData(element);
    setBanner(!banner);
  };

  const handleToggle = () => {
    setBanner(!banner);
  };

  const handleAPI = async (user) => {
    try {
      const response = await axios.get(`${API}/${user}`);
      if (response.data) setApiData([response.data]);
      else setApiData([]);
    } catch (error) {
      throw error;
    }
  };

  const handleFriendAPI = async (user) => {
    try {
      const response = await axios.get(`${FriendAPI}/${user}`);
      if (response.data) setApiFriendData(response.data);
      else setApiFriendData([]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handleFriendAPI(dataInp);
  }, [apiData]);

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAPI(dataInp);
        }}
      >
        <div className="">
          <input
            type="text"
            className="inputBox"
            placeholder="Enter user name"
            value={dataInp}
            onChange={(e) => setDataInp(e.target.value)}
          />
        </div>
        <div className="">
          <button type="submit" className="button">
            {" "}
            Search
          </button>
        </div>
      </form>
      {!banner ? (
        <>
          <div className="userCard">
            <Card data={apiData} handleBanner={handleBanner} />
          </div>
          <hr />
          <div className="friendCard">
            <Card data={apiFriendData} handleBanner={handleBanner} />
          </div>
        </>
      ) : (
        <div className="bannerCard">
          <BannerCard data={bannerData} toggle={handleToggle} />
        </div>
      )}
    </>
  );
}

export default Display;
