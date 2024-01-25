"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useFirebase } from "@/firebase";
import styles from "../page.module.css";

export default function Navbar() {
  const router = useRouter();
  const { user, googleSignIn, logOut } = useFirebase();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/admin");
    } catch (error) {
      // In a real app, we would save the error to a log file...
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      // In a real app, we would save the error to a log file...
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className={styles.navbar}>
      {user ? (
        <div>
          <button className={styles.button} onClick={handleSignOut}>
            Sign Out
          </button>
          <span>Hello, {user.displayName}</span>
        </div>
      ) : (
        <button className={styles.button} onClick={handleSignIn}>
          {loading ? "Loading" : "Sign In"}
        </button>
      )}
      <div className={styles.navbarOptions}>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>{user && <Link href="/admin">→ Admin</Link>}</div>
      </div>
    </div>
  );
}
