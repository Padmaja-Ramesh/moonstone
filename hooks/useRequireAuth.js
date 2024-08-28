"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function useRequireAuth() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return user;
}
