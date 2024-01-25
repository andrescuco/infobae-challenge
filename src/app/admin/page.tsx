"use client";

import Image from "next/image";

import styles from "../page.module.css";
import { getFirestoreUsersCollection } from "@/api";
import { useCallback, useEffect, useState } from "react";
import { useFirebase } from "@/firebase";

export default function Admin() {
  const { db, user } = useFirebase();
  const [users, setUsers] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = useCallback(async () => {
    const users = await getFirestoreUsersCollection(db);
    setUsers(users);
     
    return users;
  }, [db]);

  useEffect(() => {
    if (user) {
      fetchUsers();
    }
    setLoading(false);
  }, [db, fetchUsers, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All users (From Firestore Non-relational DB)</h1>
      {users?.map((user: {
        email: string;
        photoURL: string;
        name: string;
      }) => {
        return (
          <div key={user.email} className={styles.adminUser}>
            <Image
              src={user.photoURL}
              alt={`Picture of ${user.name}`}
              width={40}
              height={40}
              priority
            />
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        );
      })}
    </div>
  );
}
