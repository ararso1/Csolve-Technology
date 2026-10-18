"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header, single }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 single={single} />;
    case 2:
      return <Header2 single={single} />;
    case 3:
      return <Header3 single={single} />;
    case 5:
      return <Header5 single={single} />;
    case 6:
      return <Header6 single={single} />;
    default:
      return <Header6 single={single} />;
  }
};
export default Header;

const Menu = ({ single, menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "services", title: "Services" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
      ];
  return (
    <Fragment>
      {single ? (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            {singleMenu.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">
                Services
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/service">All Services</Link>
                </li>
                <li>
                  <Link href="/service-details/software-development">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/service-details/website-development">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="/service-details/mobile-app-development">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="/service-details/erp-solutions">ERP Solutions</Link>
                </li>
                <li>
                  <Link href="/service-details/ai-solutions">AI Solutions</Link>
                </li>
                <li>
                  <Link href="/service-details/networking-it-infrastructure">
                    Networking &amp; Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/service-details/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/service-details/social-media-management">
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link href="/service-details/cybersecurity">Cybersecurity</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/our-works">
                Works
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/our-works">Our Works</Link>
                </li>
                <li>
                  <Link href="/community-impact">
                    Community Impact &amp; Volunteering
                  </Link>
                </li>
                <li>
                  <Link href="/partners">Our Partners</Link>
                </li>
                {/* <li>
                  <Link href="/project">Projects</Link>
                </li> */}
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/news">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "services", title: "Services" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Services")}>
                    Services
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Services")}>
                    <li>
                      <Link href="/service">All Services</Link>
                    </li>
                    <li>
                      <Link href="/service-details/software-development">
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/website-development">
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/mobile-app-development">
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/erp-solutions">
                        ERP Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/ai-solutions">
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/networking-it-infrastructure">
                        Networking &amp; Infrastructure
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/digital-marketing">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/social-media-management">
                        Social Media Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/cybersecurity">
                        Cybersecurity
                      </Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Services")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Works")}>
                    Works
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Works")}>
                    <li>
                      <Link href="/our-works">Our Works</Link>
                    </li>
                    <li>
                      <Link href="/community-impact">
                        Community Impact &amp; Volunteering
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners">Our Partners</Link>
                    </li>
                    {/* <li>
                      <Link href="/project">Projects</Link>
                    </li> */}
                    <li>
                      <Link href="/gallery">Gallery</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Works")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <Link href="/news">Blog</Link>
                </li>
                <li className="mean-last">
                  <Link href="/contact">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/csolve-logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu single={single} menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
                We Build More Than Systems. Csolve Technology delivers software,
                AI, ERP, infrastructure, and digital solutions for private
                businesses, government, and NGOs across East Africa.
              </p>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="/contact">
                        Head Office: Labu Mall, Addis Ababa, Ethiopia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-building" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="/contact">
                        Branch: Birra Mall, Dire Dawa, Ethiopia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@csolvetechnology.com">
                        info@csolvetechnology.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+251986828384">+251 986828384</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <span>Mon – Fri: 8:30 AM – 5:30 PM</span>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn text-center">
                    Contact Us
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const Header1 = ({ single, menu }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img
                    src="/assets/img/csolve-logo.png"
                    alt="logo-img"
                    className="logo-1"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="/assets/img/csolve-logo.png"
                    alt="logo-img"
                    className="logo-2"
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Talk to Csolve</p>
                    <h4>
                      <a href="mailto:info@csolvetechnology.com">
                        info@csolvetechnology.com
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
      />
    </Fragment>
  );
};

const Header2 = ({ single }) => {
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "testimonial", title: "Testimonial" },
  ];

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/csolve-logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header3 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "services", title: "Services" },
    { id: 1, href: "about", title: "About" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "testimonial", title: "Testimonial" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/csolve-logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+251986828384">+251 986828384</a>
                    </h4>
                  </div>
                </div>
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header5 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "contact", title: "Contact" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-6">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/" className="logo-1">
                  <img src="/assets/img/csolve-logo.png" alt="logo-img" />
                </Link>
                <Link href="/" className="logo-2">
                  <img src="/assets/img/csolve-logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header6 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "feature", title: "Feature" },
    { id: 4, href: "pricing", title: "Pricing" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/csolve-logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};
