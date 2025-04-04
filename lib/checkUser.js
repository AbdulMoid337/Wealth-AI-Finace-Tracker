// Add the missing import for auth
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    // Get the current user from Clerk
    const { userId } = auth();
    
    // If no user is authenticated, return null
    if (!userId) {
      return null;
    }

    // Find the user in our database
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    // If user exists in our database, return it
    if (user) {
      return user;
    }

    // Get user details from Clerk
    const clerkUser = await currentUser();
    
    // Check if we have valid user data from Clerk before proceeding
    if (!clerkUser) {
      console.error("No Clerk user found despite having userId");
      return null;
    }

    // Create a new user in our database
    const newUser = await db.user.create({
      data: {
        clerkUserId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error);
    return null;
  }
};