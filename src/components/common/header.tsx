import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  LucideMessageCircle,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";

import { appConfig, navConfig, type INavConfig } from "@/constants/app-config";
import Logo from "./logo";
import CustomButton from "./button";

/**
 * Header component with a custom Tailwind‑powered mobile drawer.
 * No external UI libraries (Flowbite, MUI, etc.) – just plain React + JSX.
 */
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="grid">
      {/* —————————————————— Utility bar —————————————————— */}
      <div className="py-2 grid gap-3 lg:gap-0 lg:flex-center lg:justify-between page-x-padding bg-main text-white font-semibold">
        <a
          href={`tel:${appConfig.contact.replace(/\s+/g, "")}`}
          className="flex items-center gap-2 hover:underline"
          aria-label={`Call ${appConfig.contact}`}
        >
          <PhoneCall className="icon" />
          <span>Call : {appConfig.contact}</span>
        </a>

        <a
          href={`https://wa.me/${appConfig.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          aria-label={`Chat on WhatsApp ${appConfig.whatsapp}`}
        >
          <LucideMessageCircle className="icon" />
          <span>WhatsApp : {appConfig.whatsapp}</span>
        </a>

        <div className="flex space-x-3">
          <SocialLink
            href={appConfig.facebook}
            label="Facebook"
            svg={facebookSVG}
          />
          <SocialLink
            href={appConfig.instagram}
            label="Instagram"
            svg={instagramSVG}
          />
        </div>
      </div>

      {/* —————————————————— Main bar —————————————————— */}
      <div className="bg-gray-50 py-6 px-3 lg:page-x-padding flex-center justify-between">
        <Brand />
        <DesktopNav />
        <div className="hidden lg:block">
          <CustomButton
            onClick={() => navigate("/contact")}
            title="Contact now"
          />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

/* -------------------------------------------------------------------------- */
/*                               Sub‑components                               */
/* -------------------------------------------------------------------------- */

const Brand = () => (
  <div className="flex-center">
    <Logo />
    <span className="ml-3 text-2xl font-extrabold text-main leading-tight">
      Manya <br /> Physiotherapy
    </span>
  </div>
);

const DesktopNav = () => (
  <nav className="hidden lg:block">
    <ul className="flex-center gap-12 transition-all duration-400">
      {navConfig.map((item: INavConfig) => (
        <li key={item.id} className="group relative">
          <NavItem item={item} />
        </li>
      ))}
    </ul>
  </nav>
);

const NavItem = ({ item }: { item: INavConfig }) => {
  const base = "flex-center gap-2";
  return (
    <>
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `${
            isActive
              ? "text-main font-bold rounded-full px-4 py-2 bg-light/40"
              : ""
          } ${base}`
        }
      >
        {item.label}
        {item.children && (
          <ChevronDown className="icon text-black group-hover:-rotate-180 transition-all duration-400" />
        )}
      </NavLink>

      {item.children && (
        <ul className="hidden group-hover:grid absolute z-50 top-6 bg-light p-2 rounded-xl shadow left-0 transition-all duration-400">
          {item.children.map((child) => (
            <li key={child.id} className="group">
              <NavLink
                to={child.link}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main font-bold rounded-full px-4 py-2 bg-light/40"
                      : ""
                  } flex-center justify-start gap-2 hover:bg-white py-2 px-3 rounded-xl whitespace-nowrap`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

/**
 * MobileMenu — plain React implementation.
 * Uses CSS transforms to slide the drawer.
 */
const MobileMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Close the drawer and optionally navigate.
  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* —— Toggle button —— */}
      <button
        aria-label="Open navigation"
        className="lg:hidden text-white bg-main rounded-full p-5"
        onClick={() => setOpen(true)}
      >
        <Menu className="icon" />
      </button>

      {/* —— Drawer —— */}
      <div
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-40 h-screen w-full max-w-xs bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b">
          <Brand />
          <button
            aria-label="Close navigation"
            className="bg-main p-3"
            onClick={() => setOpen(false)}
          >
            <X className="icon text-white" />
          </button>
        </header>

        <ul className="grid gap-6 mt-8 pl-4 pr-6 overflow-y-auto h-[calc(100vh-140px)]">
          {navConfig.map((item: INavConfig) => (
            <li key={item.id} className="group">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `${isActive ? "text-main font-bold" : ""} flex gap-2 py-1`
                }
                onClick={() => go(item.link)}
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="mt-2 pl-4 grid gap-2">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <NavLink
                        to={child.link}
                        className={({ isActive }) =>
                          `${isActive ? "text-main font-bold" : ""} block py-1`
                        }
                        onClick={() => go(child.link)}
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li className="lg:hidden">
            <CustomButton title="Contact now" onClick={() => go("/contact")} />
          </li>
        </ul>
      </div>

      {/* —— Backdrop —— */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setOpen(false)}
          aria-label="Close navigation backdrop"
        />
      )}
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Helper components/SVGs                           */
/* -------------------------------------------------------------------------- */

type SocialLinkProps = { href: string; label: string; svg: React.ReactElement };
const SocialLink = ({ href, label, svg }: SocialLinkProps) => (
  <a
    rel="noopener noreferrer"
    href={href}
    title={label}
    className="flex items-center p-1"
    aria-label={label}
  >
    {svg}
  </a>
);

// SVGs are extracted to keep the markup readable.
const facebookSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-5 h-5 fill-current"
  >
    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" />
  </svg>
);

const instagramSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-5 h-5 fill-current"
  >
    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.396 2.176 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.176 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.857c4.271 0 4.771 0.019 6.458 0.089 1.563 0.077 2.411 0.333 2.974 0.553 0.75 0.292 1.281 0.641 1.844 1.204s0.917 1.094 1.204 1.844c0.219 0.563 0.476 1.411 0.553 2.974 0.070 1.687 0.089 2.187 0.089 6.458s-0.019 4.771-0.089 6.458c-0.077 1.563-0.333 2.411-0.553 2.974-0.292 0.75-0.641 1.281-1.204 1.844s-1.094 0.917-1.844 1.204c-0.563 0.219-1.411 0.476-2.974 0.553-1.687 0.070-2.187 0.089-6.458 0.089s-4.771-0.019-6.458-0.089c-1.563-0.077-2.411-0.333-2.974-0.553-0.75-0.292-1.281-0.641-1.844-1.204s-0.917-1.094-1.204-1.844c-0.219-0.563-0.476-1.411-0.553-2.974-0.070-1.687-0.089-2.187-0.089-6.458s0.019-4.771 0.089-6.458c0.077-1.563 0.333-2.411 0.553-2.974 0.292-0.75 0.641-1.281 1.204-1.844s1.094-0.917 1.844-1.204c0.563-0.219 1.411-0.476 2.974-0.553 1.687-0.070 2.187-0.089 6.458-0.089zM16 7.802c-4.531 0-8.198 3.667-8.198 8.198s3.667 8.198 8.198 8.198 8.198-3.667 8.198-8.198-3.667-8.198-8.198-8.198zM16 21.344c-2.949 0-5.344-2.396-5.344-5.344s2.396-5.344 5.344-5.344 5.344 2.396 5.344 5.344-2.396 5.344-5.344 5.344zM26.469 7.516c0 1.063-0.865 1.927-1.927 1.927s-1.927-0.865-1.927-1.927 0.865-1.927 1.927-1.927 1.927 0.865 1.927 1.927z" />
  </svg>
);
