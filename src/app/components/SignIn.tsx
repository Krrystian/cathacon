"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      onClick={() => signIn("google")}
      className="p-4 border-2 border-red-500 rounded-xl"
    >
      ZALOGUJ PRZY POMOCY GOOGLE
    </button>
  );
}
