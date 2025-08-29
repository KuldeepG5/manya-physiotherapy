import { appConfig } from "@/constants/app-config";
import Logo from "./logo";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="divide-y bg-main text-white px-3 lg:page-x-padding">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <NavLink to="/" className="grid gap-3">
            <div className="flex items-center justify-start gap-3 rounded-full">
              <Logo isLight={false} />
              <span className="text-3xl font-bold">
                Manya <br /> Physiotherapy
              </span>
            </div>
            <p>
              Manya Physiotherapy Center offers advanced, personalized
              physiotherapy treatments by seamlessly integrating in-clinic
              physiotherapy, home physiotherapy, and tele physiotherapy in
              Kanpur — physiotherapy in{" "}
              <strong>
                Naubasta, Yashoda Nagar, Saket Nagar, Barra, Kidwai Nagar,
                Jarauli, Kakadeo, Swaroop Nagar, Civil Lines, Nawabganj, Azad
                Nagar, Vishnupuri, Ashok Nagar, Harsh Nagar, as well as
                Kalyanpur, Shastri Nagar, Govind Nagar, Kashev Nagar, Gopal
                Nagar and all over in Kanpur.
              </strong>
            </p>
          </NavLink>
        </div>

        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 lg:pl-10">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Useful Links</h3>
            <ul className="space-y-1">
              <li className="link-animation">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="link-animation">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="link-animation">
                <NavLink to="/therapies-offered">Our Offerings</NavLink>
              </li>
              <li className="link-animation">
                <NavLink to="/blog">Blogs</NavLink>
              </li>
              <li className="link-animation">
                <NavLink to="/faqs">FAQ</NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Company</h3>
            <ul className="space-y-1">
              <li className="link-animation">
                <NavLink to="/privacy-policy">Privacy</NavLink>
              </li>
              <li className="link-animation">
                <NavLink to="/terms-and-conditions">Terms of Service</NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex-center justify-start gap-1 link-animation">
                <MapPin className="icon" />
                {appConfig.location}
              </li>
              <li className="link-animation">
                <a
                  className="flex-center justify-start gap-1"
                  rel="noopener noreferrer"
                  href={`mailto:${appConfig.gmail}`}
                >
                  <Mail className="icon" />
                  {appConfig.gmail}
                </a>
              </li>
              <li className="link-animation">
                <a
                  className="flex-center justify-start gap-1"
                  rel="noopener noreferrer"
                  href={`tel:${appConfig.contact}`}
                >
                  <PhoneCall className="icon" />
                  {appConfig.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="uppercase">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href={appConfig.facebook}
                title="Facebook"
                className="flex items-center p-1"
              >
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" />
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href={appConfig.instagram}
                title="Instagram"
                className="flex items-center p-1"
              >
                {/* Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center flex items-center justify-between">
        <span>
          Made by{" "}
          <a
            href="https://www.code-aspire.com/"
            target="_blank"
            className="hover:underline"
          >
            Codeaspire
          </a>
        </span>
        <span>
          © {new Date().getFullYear()} Manya Physiotherapy. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
