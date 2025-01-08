"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { LayoutDashboard, PenBox } from "lucide-react";
import { getAuth } from "firebase/auth";
import app from "../config";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [user, setUser] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserInfo({
                    firstName: currentUser.displayName,
                    email: currentUser.email,
                    id: currentUser.uid,
                });
                setPhotoURL(
                    currentUser.photoURL ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiibOngFYog5Ri5UoFKH3CsHMOvomBLf4JAw&s"
                );
            } else {
                setUser(null);
                setUserInfo({});
                setPhotoURL(null);
            }
        });
        return () => unsubscribe();
    }, [auth, setUserInfo]);

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            router.push("/");
        } catch (error) {
            console.error("Error during sign-out:", error.message);
        }
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/" className="text-gray-800 hover:text-gray-600">
                        MyLogo
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    {user && (
                        <>
                            <Link href="/dashboard">
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" className="flex items-center gap-2">
                                        <LayoutDashboard size={18} />
                                        <span className="hidden md:inline">Dashboard</span>
                                    </Button>
                                </div>
                            </Link>
                            <Link href="/transcation/create">
                                <div className="flex items-center gap-2">
                                    <Button className="flex items-center gap-2">
                                        <PenBox size={18} />
                                        <span className="hidden md:inline">Add Transaction</span>
                                    </Button>
                                </div>
                            </Link>
                            {/* Dropdown Menu on Hover */}
                            <div className="relative group">
                                <img
                                    className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                    src={photoURL}
                                    alt="User Profile"
                                />
                                <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-48">
                                    <div className="p-4">
                                        <p className="font-bold">{userInfo.firstName || "User"}</p>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                    <div
                                        className="block px-4 py-2 bg-red-500 cursor-pointer rounded-b-lg "
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {!user && (
                        <Link
                            href="/sign-in"
                            className="text-sm text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
