"use client";
import { UserProfile, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please sign in to access the dashboard</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="absolute top-4 right-4">
          <UserButton />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {user.fullName}</p>
              <p><span className="font-medium">Email:</span> {user.primaryEmailAddress?.emailAddress}</p>
              <p><span className="font-medium">User ID:</span> {user.id}</p>
              {user.username && (
                <p><span className="font-medium">Username:</span> {user.username}</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="flex items-center space-x-4">
              <img 
                src={user.imageUrl} 
                alt="Profile" 
                className="w-20 h-20 rounded-full"
              />
              <div>
                <p className="text-gray-600">Member since</p>
                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;