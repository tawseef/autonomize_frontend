/* eslint-disable react/prop-types */
import "./bannercard.style.css";

const BannerCard = ({ data, toggle }) => {
  if (data.name) {
    return (
      <div className="bannerCardWrapper" key="uni" onClick={toggle}>
        <div className="bannerCardImage">
          <img className="bannerImg" src={data.avatar_url} alt="Not Found" />
        </div>
        <div className="bannerCardHead">
          {data.name ? (
            <div className="bannerCardTitle">
              {" "}
              <span className="label">Name:</span> {data.name}
            </div>
          ) : (
            false
          )}
          {data.login ? (
            <div className="bannerCardTitle">
              <span className="label">Login as:</span> {data.login}
            </div>
          ) : (
            false
          )}
          {data.bio ? (
            <div className="bannerCardTitle">
              <span className="label">Bio: </span> {data.bio}
            </div>
          ) : (
            false
          )}
          {data.location ? (
            <div className="bannerCardTitle">
              <span className="label">Location:</span> {data.location}
            </div>
          ) : (
            false
          )}
          {data.twitter ? (
            <div className="bannerCardText">
              <span className="label">Twitter:</span> {data.twitter}
            </div>
          ) : (
            false
          )}
          {data.followers ? (
            <div className="bannerCardText">
              <span className="label">Followers:</span> {data.followers}
            </div>
          ) : (
            false
          )}
          {data.following ? (
            <div className="bannerCardText">
              <span className="label">Following:</span> {data.following}
            </div>
          ) : (
            false
          )}
          {data.public_repos ? (
            <div className="bannerCardText">
              <span className="label">Public_Repos:</span> {data.public_repos}
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bannerCardWrapper bg-color" key="uni" onClick={toggle}>
        <div className="bannerCardImage">
          <img className="bannerImg" src={data.avatar_url} alt="Not Found" />
        </div>
        <div className="bannerCardHead">
          {data.login ? (
            <div className="bannerCardTitle">
              <span className="label">Login as: </span> {data.login}
            </div>
          ) : (
            false
          )}
          {data.id ? (
            <div className="bannerCardText">
              <span className="label">Bio: </span> {data.id}
            </div>
          ) : (
            false
          )}
          {data.node_id ? (
            <div className="bannerCardText">
              <span className="label">Node ID: </span> {data.node_id}
            </div>
          ) : (
            false
          )}
          {data.url ? (
            <div className="bannerCardText">
              <span className="label">URL: </span>
              {data.url}
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    );
  }
};

export default BannerCard;
