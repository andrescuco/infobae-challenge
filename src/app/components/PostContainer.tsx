import Image from "next/image";
import Link from "next/link";

import styles from "../page.module.css";
import { Post } from "../../types";
import { UserCard } from "./UserCard";
import { PostTag } from "./PostTag";

export default function PostContainer({ post }: { post: Post }) {
  const prettyPublishDate = new Date(post.publishDate).toLocaleDateString();

  return (
    <div className={styles.postContainer}>
      <Link href={`/comments/${post.id}`}>
        <div>
          <Image
            className={styles.postImage}
            src={post.image}
            alt="Picture attached to the post"
            width={270}
            height={270}
            priority
          />
        </div>

        <div className={styles.postContent}>
          <p>{post.text}</p>
        </div>
      </Link>

      <div className={styles.postMeta}>
        <UserCard user={post.owner} />

        <div className={styles.tagsContainer}>
          {post.tags.map((tag, idx) => (
            <PostTag key={idx} tag={tag} />
          ))}
        </div>

        <div className={styles.metaData}>
          <span>Published: {prettyPublishDate}</span>
        </div>
        <div className={styles.metaData}>
          <span>Likes: {post.likes}</span>
        </div>
      </div>
    </div>
  );
}
