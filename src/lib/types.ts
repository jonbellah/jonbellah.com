export type CategoryColors =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export interface BlogPost {
  frontmatter: {
    title: string;
    path: string;
    date: string;
    excerpt: string;
    category: {
      label: string;
      slug: string;
    };
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
