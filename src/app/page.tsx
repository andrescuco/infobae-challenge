import styles from "./page.module.css";
import { getPostCommentsById, getPosts, getUsers } from "../api";
import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";

export default async function Home() {
  const posts = await getPosts();
  const users = await getUsers();
  // const comments = await getPostCommentsById("60d21bf367d0d8992e610e88");

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.postGrid}>
        {posts.map((post) => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}
