import Image from "next/image";
import styles from "./page.module.css";
import { getPosts, getUsers, getPostsByTag } from "../api";
import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";

export default async function Home() {
  const posts = await getPosts();
  const users = await getUsers();
  const postsWithWaterTag = await getPostsByTag("water");

  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        {posts.map((post) => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}
