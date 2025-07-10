import { useCallback, useEffect, useState } from "react";
import GenreForm from "../components/organisms/GenreForm";
import GenreList from "../components/organisms/GenreList";
import DialogFormTemplate from "../components/templates/DialogFormTemplate";
import { UserRepository } from "../repositories/UserRepository";
import { useAuthStore } from "../stores/AuthStore";

export default function HomePage() {
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
        <h2 className="text-xl font-semibold">List of Genre</h2>
        {isAdmin && (
          <DialogFormTemplate
            title="Add New Genre"
            triggerLabel="Add Genre"
            formId="genre-form"
          >
            <GenreForm />
          </DialogFormTemplate>
        )}
      </header>
      <GenreList />
    </div>
  );
}
