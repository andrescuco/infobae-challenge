import Image from "next/image";

import { Post } from "../../types/post";
import { User } from "../../types/user";

function UserCard({ user }: { user: User }) {
return (
  <div>
      <Image
        src={user.picture}
        alt="User picture"
        width={180}
        height={37}
        priority
      />
    <span>{user.title} {user.firstName} {user.lastName}</span>
  </div>
)
};

export default function PostContainer({ post }: { post: Post }) {
  return (
    <div>
      {post.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
      <span>{post.likes}</span>
      <p>{post.text}</p>
      <span>{post.publishDate}</span>
      <Image
        src={post.image}
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <UserCard user={post.owner} />
    </div>
  );
}
