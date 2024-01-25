import styles from "./page.module.css";
import { getPosts, getUsers } from "../api";
import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";

export default async function Home() {
  const posts = await getPosts();

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
