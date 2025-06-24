export const appConfig = {
  appName: "Manya Physiotherapy",
  facebook: "",
  instagram: "",
  twitter: "",
  gmail: "example@gmail.com",
  location: "97, Rajeev Bihar, Naubasta, Kanpur, UP",
  whatsapp: "+91- 6394777590",
  contact: "+91- 9598055535",
};

export interface INavChildren {
  id: number;
  label: string;
  link: string;
}

export interface INavConfig {
  id: number;
  label: string;
  link: string;
  children?: INavChildren[];
}

export const navConfig: INavConfig[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    label: "Our Offerings",
    link: "/therapies-offered",
    children: [
      {
        id: 1,
        label: "Therapies Offered",
        link: "/therapies-offered",
      },
      {
        id: 2,
        label: "Services Offered",
        link: "/service-offered",
      },
      {
        id: 3,
        label: "Stay And Physiotherapy",
        link: "/stay-and-physiotherapy",
      },
    ],
  },
  {
    id: 4,
    label: "Patient Education",
    link: "/symptoms-we-treat",
    children: [
      {
        id: 1,
        label: "Symptoms We Treat",
        link: "/symptoms-we-treat",
      },
      {
        id: 2,
        label: "Conditions We Treat",
        link: "/conditions-we-treat",
      },
      {
        id: 3,
        label: "Home Exercise",
        link: "/home-exercise",
      },
    ],
  },
  {
    id: 5,
    label: "Blogs",
    link: "/blog",
  },
  {
    id: 5,
    label: "FAQs",
    link: "/faqs",
  },
];
