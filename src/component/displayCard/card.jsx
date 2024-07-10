/* eslint-disable react/prop-types */
import "./card.style.css";
const Card = ({ data, handleBanner }) => {
  console.log(data);
  const handleClick = (ele) => () => {
    handleBanner(ele);
  };

  if (!data || data.length === 0) {
    return <div></div>;
  } else if (data.friend) {
    return (
      <>
        {data.friend.map((ele, ind) => (
          <div className="cardWrapper" key={ind} onClick={handleClick(ele)}>
            <div className="cardImage">
              <img className="img" src={ele.avatar_url} alt="Not Found" />
            </div>
            <div className="cardHead">
              <div className="cardTitle">{ele.login}</div>
              <div className="cardText">{ele.node_id}</div>
            </div>
          </div>
        ))}
      </>
    );
  } else
    return (
      <>
        {data.map((ele, ind) => (
          <div className="cardWrapper" key={ind} onClick={handleClick(ele)}>
            <div className="cardImage">
              <img className="img" src={ele.avatar_url} alt="Not Found" />
            </div>
            <div className="cardHead">
              <div className="cardTitle">{ele.login}</div>
              <div className="cardText">{ele.blog}</div>
              <div className="cardText">{ele.location}</div>
            </div>
          </div>
        ))}
      </>
    );
};

export default Card;
