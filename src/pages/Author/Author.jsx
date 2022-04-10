import React from "react";

import "./Author.style.css";
import authorImage from "../../../public/author.jpg";
import linkedInLogo from "../../../public/linkedin-logo.png";
import githubLogo from "../../../public/github-logo.png";
import { AUTHOR_PAGE } from "../../utils/constants";

export const mainClass = "author-page";

const Author = () => {
  return (
    <div className={mainClass}>
      <img src={authorImage} className={`${mainClass}_image`} />
      <div className={`${mainClass}_name`}>{AUTHOR_PAGE.AUTHOR_NAME}</div>
      <div className={`${mainClass}_social`}>
        <a
          href={AUTHOR_PAGE.LINKEDIN_LINK}
          className={`${mainClass}_social-linkedin`}
        >
          <img
            src={linkedInLogo}
            className={`${mainClass}_social-linkedin-image`}
          />
          {AUTHOR_PAGE.SOCIAL_NAME}
        </a>
        <a
          href={AUTHOR_PAGE.GITHUB_LINK}
          className={`${mainClass}_social-github`}
        >
          <img
            src={githubLogo}
            className={`${mainClass}_social-github-image`}
          />
          {AUTHOR_PAGE.SOCIAL_NAME}
        </a>
      </div>
    </div>
  );
};

export default Author;
