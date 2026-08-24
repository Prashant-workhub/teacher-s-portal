import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className='h-screen gap-4'>
      <h1 className='mt-10 p-4 justify-center flex'>404 Not Found</h1>
      <p className='justify-center p-4 flex'>
        Please navigate to authorised links
      </p>
      <br />
      <br />
      <NavLink
        className='justify-center flex bg-[#2563EB] h-8 p-1 px-2 m-1 text-[#FFFFFF] font-semibold'
        to={"/"}
      >
        Dashboard
      </NavLink>
    </div>
  );
}

export default NotFound;
