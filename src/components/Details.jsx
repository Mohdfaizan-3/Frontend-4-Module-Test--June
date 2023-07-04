import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!response.ok) {
        console.error("something went wrong");
      }
      const item = await response.json();
      setData(item);
    };
    fetchData();
  }, [id, data]);

  return (
    <>
      <div className="btnDiv">
        <Link className="backBtn" to="/" relative="path">
          back button
        </Link>
      </div>

      {data && (
        <div className="postDetail">
          <img src={`https://picsum.photos/200?random=${data.id}`} alt="post" />
          <p>userId: {data.userId}</p>
          <h2 className="heading">{data.title}</h2>
          <p className="desc">{data.body}</p>
        </div>
      )}
    </>
  );
};
export default Details;
