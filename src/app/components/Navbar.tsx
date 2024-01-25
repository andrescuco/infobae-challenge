"use client";

import { useRouter } from "next/navigation";

import styles from "../page.module.css";
import { useFirebase } from "@/firebase";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const { user, googleSignIn, logOut } = useFirebase();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      // Redirect to /admin
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
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
