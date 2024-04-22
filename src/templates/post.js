import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";

// TOC 로직

const createTOC = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const headers = doc.querySelectorAll("h2, h3");
    let toc = `<div class="toc"><div class="toc-title">목차</div><ul>`;
  
    headers.forEach(header => {
      const headerText = header.textContent;
      const headerLevel = header.tagName.toLowerCase(); // h2, h3
      let headerId = headerText
        .replace(/[().]/g, '') // 괄호와 마침표 제거
        .replace(/[^a-zA-Z0-9가-힣-\s]/g, '') // 영문, 숫자, 하이픈, 한글, 공백 외 제거
        .replace(/\s+/g, '-') // 공백을 하이픈으로 치환
        .toLowerCase();
        header.id = headerId;
  
      // 클래스 이름 수정: "toc-item"에서 "toc-item-h2" 또는 "toc-item-h3"로
      toc += `<li class="toc-item-${headerLevel}"><a href="#${headerId}">${headerText}</a></li>`;
    });
  
    toc += `</ul></div>`;
  
    return { toc, updatedHtml: doc.body.innerHTML };
  };

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost;    
    const [content, setContent] = useState({ html: post.html, toc: '' });

    useEffect(() => {
        const { toc, updatedHtml } = createTOC(post.html);
        setContent({ html: updatedHtml, toc });
    }, [post.html]);

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>                
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        {/* {post.feature_image ? (
                            <figure className="post-feature-image">
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null} */}
                        <div dangerouslySetInnerHTML={{ __html: content.toc }} />
                        <section className="post-full-content">                            
                            <h1 className="content-title">{post.title}</h1>
                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
    query ($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
