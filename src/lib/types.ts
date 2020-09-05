export interface BlogPost {
  frontmatter: {
    title: string;
    path: string;
    date: string;
    excerpt: string;
  };
  fields?: {
    readingTime?: {
      text?: string;
    };
  };
  html: string;
}

export interface BlogPostNode {
  node: BlogPost;
}
