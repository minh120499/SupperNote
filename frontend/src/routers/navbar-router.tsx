import { AppRouters } from "@/types/router";
import { AboutUsPage } from "@/pages/AboutUsPage";
import { KnowledgePage } from "@/pages/KnowledgePage";
import { HomePage } from "@/pages/HomePage";
import { InvestPage } from "@/pages/InvestPage";

export const navBarRouter: AppRouters[] = [
  {
    path: "",
    index: true,
    element: <HomePage />,
    label: "Home",
  },
  {
    path: "invest",
    element: <InvestPage />,
    label: "Đầu tư",
  },
  {
    path: "knowledge",
    element: <KnowledgePage />,
    label: "Kiến thức",
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
    label: "Về chúng tôi",
  },
];

export const subMenuNavBarMap: { [key: string]: AppRouters[] } = {
  invest: [
    {
      path: "test",
      element: <></>,
      label: "test",
    },
  ],
};
