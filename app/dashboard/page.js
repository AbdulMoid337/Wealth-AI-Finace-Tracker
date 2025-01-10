"use client";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../config";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);
  const { userInfo } = useUser();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/sign-in");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        {user ? (
          <div>
            <p>
              Welcome,{" "}
              {userInfo.signInMethod === "email"
                ? user.firstName
                :  user.email.split('@')[0]}
              !
            </p>
            <p>Email: {user.email}</p>
            <img
              className="rounded-md"
              src={
                user.photoURL 
              }
              alt="User Profile"
              width="100"
            />
            <button
              onClick={handleSignOut}
              className="w-full py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Sign out
            </button>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;   