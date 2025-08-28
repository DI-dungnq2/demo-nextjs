import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Danh sách Posts</h1>
      {posts.length === 0 ? (
        <p>Đang tải...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <b>{post.title}</b>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}