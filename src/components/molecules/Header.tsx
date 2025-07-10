import { useAuthStore } from "../../stores/AuthStore";
import Avatar from "../atoms/Avatar";

export default function Header() {
  const { user } = useAuthStore();
  const { logout } = useAuthStore();

  return (
    <header className="bg-black text-white p-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">Sporkify</h1>
      <nav className="text-sm">
        <ul className="flex space-x-4 items-center">
          {user?.user?.photoURL ? (
            <li>
              <Avatar alt="User Avatar" src={user.user.photoURL} />
            </li>
          ) : (
            <li>
              <Avatar
                alt="Default Avatar"
                src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
              />
            </li>
          )}
          <li>
            <button className="hover:underline" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
