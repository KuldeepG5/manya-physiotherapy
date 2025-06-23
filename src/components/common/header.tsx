import { appConfig, navConfig, type INavConfig } from "@/constants/app-config";
import {
  ChevronDown,
  LucideMessageCircle,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";
import Logo from "./logo";
import CustomButton from "./button";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="grid">
      <div className="py-2 grid gap-3 lg:gap-0 lg:flex-center lg:justify-between page-x-padding bg-main text-white font-semibold">
        <div className="flex-center gap-2 cursor-default">
          <PhoneCall className="icon" />
          <p>Call : {appConfig.contact}</p>
        </div>
        <div className="flex-center gap-2 cursor-default">
          <LucideMessageCircle className="icon" />
          <p>Whatsapp : {appConfig.whatsapp}</p>
        </div>
        <div className="flex justify-start space-x-3">
          <a
            rel="noopener noreferrer"
            href={appConfig.facebook}
            title="Facebook"
            className="flex items-center p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            href={appConfig.twitter}
            title="Twitter"
            className="flex items-center p-1"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
            >
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            href={appConfig.instagram}
            title="Instagram"
            className="flex items-center p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
            </svg>
          </a>
        </div>
      </div>
      <header className="bg-gray-50 py-6 px-3 lg:page-x-padding flex-center justify-between">
        <div className="flex-center">
          <Logo />
          <span className="ml-3 text-2xl font-bold text-cyan-900">
            Manya <br /> Physiotherapy
          </span>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex-center gap-12 transtion-all duration-400">
            {navConfig.map((item: INavConfig) => (
              <li key={item.id} className="group relative">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-main font-bold rounded-full px-4 py-2 bg-light/40"
                        : ""
                    } flex-center gap-2`
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="icon text-black group-hover:-rotate-180 transition-all duration-400" />
                  )}
                </NavLink>

                {item.children && (
                  <ul className=" hidden group-hover:grid absolute z-50 top-6 bg-light p-2 rounded-xl shadow left-0 transtion-all duration-400">
                    {item.children.map((item: INavConfig) => (
                      <li key={item.id} className="group">
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-main font-bold rounded-full px-4 py-2 bg-light/40"
                                : ""
                            } flex-center justify-start gap-2 hover:bg-white py-2 px-3 rounded-xl text-nowrap`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <CustomButton
            onClick={() => navigate("/contact")}
            title="Contact now"
          />
        </div>

        <MobileMenu />
      </header>
    </header>
  );
};

export default Header;

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Drawer init and toggle */}
      <div className="text-center lg:hidden">
        <button
          className="text-white bg-main rounded-full text-sm p-5 "
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <Menu className="icon" />
        </button>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-full dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <Logo />
          <span className="ml-3 text-2xl">
            Manya <br /> Physiotherapy
          </span>
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className=" bg-main p-3 text-sm absolute top-4 end-4 inline-flex items-center justify-center "
        >
          <X className="icon" />
        </button>

        <ul className="grid place-content-start gap-10 mb-12 mt-4 pl-6 transtion-all duration-400">
          {navConfig.map((item: INavConfig) => (
            <li key={item.id} className="group">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-main font-bold  py-2" : ""
                  } flex-center justify-start gap-2`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="p-2">
                  {item.children.map((item: INavConfig) => (
                    <li key={item.id} className="group">
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-main font-bold rounded-full px-4 py-2 bg-light/40"
                              : ""
                          } flex-center justify-start gap-2 hover:bg-white py-2 px-3 rounded-xl text-nowrap`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:hidden grid">
          <CustomButton
            onClick={() => navigate("/contact")}
            title="Contact now"
          />
        </div>
      </div>
    </>
  );
};
