import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "Csolve Technology | IT Solutions, Software & Digital Innovation",
  description:
    "Csolve Technology builds practical software, AI, e-learning, and digital infrastructure that empower people and organizations across Africa.",
  icons: {
    icon: [{ url: "/assets/img/csolve-icon.png", type: "image/png" }],
    shortcut: "/assets/img/csolve-icon.png",
    apple: "/assets/img/csolve-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Preloader />
      {children}
      </body>
    </html>
  );
}
