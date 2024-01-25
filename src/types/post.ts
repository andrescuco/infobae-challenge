export type Post = {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
};

