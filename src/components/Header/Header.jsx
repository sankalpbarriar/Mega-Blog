import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; //for forcefully navigation

//logout kisko dikhana hai aur kisko nahi
function Header() {
  const authStatus = useSelector(
    (
      state //active ho ya nahi from authslice
    ) => state.auth.status
  );
  const navigate = useNavigate();

  //looping through the array of navItems
  const navItems = [
    {
      name: "Home",
      slug: "/", //URL kahan pe ja raha hai
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              (item) =>
                item.active ? ( //based on whether item is active
                  //jo html element use ho raha hai uspe key lagani hai
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)} //onClick me navigate karwa dega
                      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null                      //if not display null
            )}
            {/* agar authenticated hai then show logout button */}
            {authStatus && (            
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
