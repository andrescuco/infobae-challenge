import Image from "next/image";

import styles from "../page.module.css";
import { Post } from "../../types/post";
import { User } from "../../types/user";

function UserCard({ user }: { user: User }) {
  const uppercaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const userFullName = `${uppercaseFirstLetter(user.title)} ${uppercaseFirstLetter(user.firstName)} ${uppercaseFirstLetter(user.lastName)}`;

  return (
    <div className={styles.userCardContainer}>
      <Image
        src={user.picture}
        alt={`Picture of ${user.title} ${user.firstName} ${user.lastName}`}
        width={40}
        height={40}
        priority
      />
      <span>{userFullName}</span>
    </div>
  );
}

export default function PostContainer({ post }: { post: Post }) {
  const prettyPublishDate = new Date(post.publishDate).toLocaleDateString();

  return (
    <div className={styles.postContainer}>
      <span className={styles.smallText}>Author:</span>
      <UserCard user={post.owner} />

      <div className={styles.postContent}>
        <Image
          src={post.image}
          alt="Picture attached to the post"
          width={90}
          height={90}
          priority
        />
        <p>{post.text}</p>
      </div>

      <div className={styles.postMeta}>
        <span>{prettyPublishDate}</span>
        <span>Likes: {post.likes}</span>
        <div>
          {post.tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
