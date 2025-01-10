import { getAuth } from "firebase/auth";
import { db } from "./prisma"; // Assuming Prisma instance is exported here

export const checkUser = async (firebaseUser) => {
    const [user, setUser] = useState(null);

    // Listen for Firebase Auth state changes (e.g., when a user logs in or out)
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          console.log(user.firstname);
        }
        else{
            log
        }
    });
    return () => unsubscribe();
    
  // If no firebase user is passed, return null
  if (!firebaseUser) {
    console.log("No user is signed in");
    return null;
  }

  try {
    // Check if the user exists in the database by firebaseUserId
    const existingUser = await db.user.findUnique({
      where: {
        firebaseUserId: firebaseUser.uid,  // Firebase UID should match here
      },
    });

    if (existingUser) {
      console.log("User already exists in DB:", existingUser);
      return existingUser;  // Return the existing user if found
    }

    // If the user doesn't exist, create a new user in the database
    const name = firebaseUser.displayName || "Anonymous User";  // Fallback to anonymous name
    const email = firebaseUser.email || "";  // Firebase email (optional)
    const imageUrl = firebaseUser.photoURL || "";  // Firebase photo URL (optional)


    const newUser = await db.user.create({
      data: {
        firebaseUserId: firebaseUser.uid,  // Save Firebase UID
        name,
        email,
        imageUrl,
      },
    });

    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error.message);
    return null;
  }
};
// hello  this is not g gooo dcofe 