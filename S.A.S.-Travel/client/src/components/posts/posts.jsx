import React from "react";
import axios from "axios";
const id = "63aefe437dfec286e6903787";
const posts = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((response) => {
      setPosts(response.data);
    });
  });

  return (
    <div>
      {/*To make sure we do not do posts.map before we fetch our data*/}
      {posts &&
        posts.map((post) => {
          <div>{post}</div>;
        })}
    </div>
  );
};
export default posts;
