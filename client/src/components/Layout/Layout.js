import React from "react";
import HeaderPage from "./Header";
import FooterPage from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keyword, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <HeaderPage />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <FooterPage />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce -Shop Now",
  description: "mern stack project",
  keyword: "mern,react,node,mongodb",
  author: "Pratham Chouhan",
};
export default Layout;
