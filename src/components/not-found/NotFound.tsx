import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen gap-4 bg-[var(--app-bg)] text-[var(--app-text)]">
      <h1 className="mt-10 flex justify-center p-4">404 Not Found</h1>
      <p className="flex justify-center p-4">
        Please navigate to authorised links
      </p>
      <br />
      <br />
      <NavLink
        className="m-1 flex h-8 justify-center bg-[var(--app-brand)] px-2 p-1 font-semibold text-white"
        to={"/"}
      >
        Dashboard
      </NavLink>
    </div>
  );
}

export default NotFound;
