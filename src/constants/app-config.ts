export const appConfig = {
  appName: "Manya Physiotherapy",
  facebook: "https://www.facebook.com/share/16UDxHaPZX/",
  instagram: "https://www.instagram.com/guptakuldeep9712/",
  google: "https://share.google/8lobBRmdCSL98h2vl",
  gmail: "guptakuldeep97@gmail.com",
  location: "97, Rajeev Bihar, Naubasta, Kanpur, UP",
  googleMapLocation: "https://maps.app.goo.gl/Gi63iGmmtn33inw7A?g_st=aw",
  whatsapp: "+91- 6394777590",
  whatsappLink: "https://wa.me/message/HO7GII3HWBMLG1",
  contact: "+91- 9598055535",
  mobile: "+91- 6394777590",
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
        id: 31,
        label: "Therapies Offered",
        link: "/therapies-offered",
      },
      {
        id: 32,
        label: "Services Offered",
        link: "/service-offered",
      },
      {
        id: 33,
        label: "Full-Stay Physiotherapy Program",
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
        id: 41,
        label: "Symptoms We Treat",
        link: "/symptoms-we-treat",
      },
      {
        id: 42,
        label: "Conditions We Treat",
        link: "/conditions-we-treat",
      },
      {
        id: 43,
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
    id: 6,
    label: "FAQs",
    link: "/faqs",
  },
];
