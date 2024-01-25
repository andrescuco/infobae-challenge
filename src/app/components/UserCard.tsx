import Image from "next/image";

import styles from "../page.module.css";
import { User } from "../../types";

export function UserCard({ user }: { user: User }) {
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

