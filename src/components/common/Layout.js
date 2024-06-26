import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Navigation } from ".";
import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;

    return <>
        <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />

            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1067668052326016"
                crossorigin="anonymous"></script>
                
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-B8YMRZG4T7"></script>
            <script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B8YMRZG4T7');
            `}
            </script>
            <script type="text/javascript">
            {`
                (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "llp7mmx2ax");
            `}
            </script>
            <meta name="naver-site-verification" content="e417132b15560606c25a05c33cc1e529ee411bb3" />
            <meta name="google-site-verification" content="KzlsKQF7AFEoHXuXUBvLrXJehghsraUq0Kdc49wKbrA" />
        </Helmet>

        <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header
                    className="site-head"
                    style={{
                        ...(site.cover_image && {
                            backgroundImage: `url(${site.cover_image})`,
                        }),
                    }}
                >
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    {site.logo ? (
                                        <img
                                            className="site-logo"
                                            src={site.logo}
                                            alt={site.title}
                                        />
                                    ) : (
                                        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={site.title} />
                                    )}
                                </Link>
                            </div>
                            <div className="site-mast-right">
                                {/* {site.twitter && (
                                    <a
                                        href={twitterUrl}
                                        className="site-nav-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="site-nav-icon"
                                            src="/images/icons/twitter.svg"
                                            alt="Twitter"
                                        />
                                    </a>
                                )} */}
                                {/* 페이스북 링크 */}
                                {/* {site.facebook && (
                                    <a
                                        href={facebookUrl}
                                        className="site-nav-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="site-nav-icon"
                                            src="/images/icons/facebook.svg"
                                            alt="Facebook"
                                        />
                                    </a>
                                )} */}
                                <a
                                    className="site-nav-item"
                                    href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src="/images/icons/rss.svg"
                                        alt="RSS Feed"
                                    />
                                </a>
                            </div>
                        </div>
                        {/* {isHome ? (
                            <div className="site-banner">
                                <h1 className="site-banner-title">
                                    {site.title}
                                </h1>
                                <p className="site-banner-desc">
                                    {site.description}
                                </p>
                            </div>
                        ) : null} */}
                        <nav className="site-nav">
                            <div className="site-nav-left">

                                {/* The navigation items as setup in Ghost */}
                                <Navigation
                                    data={site.navigation}
                                    navClass="site-nav-item"
                                />

                            </div>

                            {/* <div className="site-nav-right">
                                <Link
                                    className="site-nav-button"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </div> */}
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">{site.title}</Link> © 2024                            
                        </div>
                        <div className="site-foot-nav-right">
                            <Navigation
                                data={site.navigation}
                                navClass="site-foot-nav-item"
                            />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>;
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query GhostSettings {
  allGhostSettings {
    edges {
      node {
        ...GhostSettingsFields
      }
    }
  }
  file(relativePath: {eq: "ghost-icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 30, height: 30, layout: FIXED)
    }
  }
}
`}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
