"use client";

import { getFirestoreUsersCollection } from "@/api";
import { useFirebase } from "@/firebase";
import { useCallback, useEffect, useState } from "react";

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
    setLoading(true);
    if (user) {
      fetchUsers();
    }
    setLoading(false);
  }, [db, fetchUsers, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Not authorized</div>;
  }

  return (
    <div>
      <h1>Admin</h1>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
}
