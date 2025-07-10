import { useCallback, useEffect, useState } from "react";
import SongForm from "../components/organisms/SongForm";
import SongList from "../components/organisms/SongList";
import DialogFormTemplate from "../components/templates/DialogFormTemplate";
import { useAuthStore } from "../stores/AuthStore";
import { UserRepository } from "../repositories/UserRepository";

export default function ArtistPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuthStore();

  const checkAdmin = useCallback(() => {
    if (!user?.user?.uid) {
      setIsAdmin(false);
      return;
    }

    const userRepository = new UserRepository();
    console.log("Checking user:", user?.user.uid);
    userRepository.readUser(user?.user.uid).then((user) => {
      console.log("User data:", user);
      if (user && user.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, [user?.user.uid]);

  useEffect(() => {
    checkAdmin();
  }, [checkAdmin]);

  return (
    <div className="w-full">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Artist Page</h2>
        {isAdmin && (
          <DialogFormTemplate
            formId="song-form"
            title="Add New Song"
            triggerLabel="Add Song"
          >
            <SongForm />
          </DialogFormTemplate>
        )}
      </header>
      <SongList />
    </div>
  );
}
