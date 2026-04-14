import Link from "next/link";

//left side navigation used on all pages
function Navigation(props) {
  const links = [
    { key: "home", label: "Home", href: "/", icon: "/images/education.png" },
    { key: "about", label: "About", href: "/about", icon: "/images/profile.png" },
    { key: "projects", label: "Projects", href: "/projects", icon: "/images/work.png" },
  ];

  return (
    <aside className="site-sidebar">
      <p className="font-hand fs-4 mb-4 site-sidebar-title">
        <span className="site-sidebar-title-short">LP</span>
        <span className="site-sidebar-title-full">Luke Paine</span>
      </p>
      <nav aria-label="Primary site navigation">
        {links.map((link) => {
          const activeClass = props.type === link.key ? "site-nav-active" : "";
          return (
            <Link key={link.key} href={link.href}>
              <a className={`site-nav-link ${activeClass}`}>
                <img
                  src={link.icon}
                  alt={`${link.label} icon`}
                  className="site-nav-icon"
                />
                <span className="site-nav-text">{link.label}</span>
              </a>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Navigation;
