import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsData } from "../store/post-action";
import { Link } from "react-router-dom";
const Home = () => {
  const items = useSelector((state) => state.item.items);
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsData());
  }, [dispatch]);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  const displayPost = items.map((post) => (
    <Link key={post.id} to={`item/${post.id}`} className="postLink">
      <div key={post.id} className="post">
        <img src={`https://picsum.photos/200?random=${post.id}`} alt="post" />
        <h3 className="title">{post.title}</h3>
        <p>
          {expanded ? post.body : `${post.body.slice(0, 100)}...`}
          <span
            onClick={handleReadMore}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {expanded ? " Read Less" : " Read More"}
          </span>
        </p>
      </div>
    </Link>
  ));
  return <div className="homePage">{displayPost}</div>;
};

export default Home;
