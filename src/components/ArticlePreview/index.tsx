import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'gatsby';

import Pill from 'components/Pill';
import { BlogPost } from 'lib/types';

const ArticlePreview: React.FC<BlogPost> = ({ frontmatter }) => {
  return (
    <article
      key={frontmatter.path}
      className="pb-16 mb-16 border-b border-gray-200"
    >
      <Pill color="green">Category</Pill>
      <Link to={frontmatter.path}>
        <h2 className="text-xl lg:text-3xl font-bold pt-3 pb-6 text-gray-900 leading-tight">
          {frontmatter.title}
        </h2>
        <time>{dayjs(frontmatter.date).format('MMM D, YYYY')}</time>
      </Link>
      <div className="prose prose-lg text-gray-500">{frontmatter.excerpt}</div>
    </article>
  );
};

export default ArticlePreview;
