import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // Try to find the existing user
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    // If user doesn't exist, create a new one with retry logic
    const name = `${user.firstName} ${user.lastName}`;
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
      try {
        const newUser = await db.user.create({
          data: {
            clerkUserId: user.id,
            name,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
          },
        });

        // Also create a default account for the new user
        await db.account.create({
          data: {
            name: "Default Account",
            type: "CURRENT",
            isDefault: true,
            userId: newUser.id,
          },
        });

        console.log("Successfully created new user:", newUser.id);
        return newUser;
      } catch (error) {
        console.error("Error creating user, attempt ${retryCount + 1}:", error);
        retryCount++;
        if (retryCount === maxRetries) {
          throw new Error("Failed to create user after multiple attempts");
        }
        // Wait for a short time before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  } catch (error) {
    console.error("Error in checkUser:", error);
    throw error;
  }
};