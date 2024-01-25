import { render, screen } from "@testing-library/react";

import { PostComment } from "../PostComment";
import { PostTag } from "../PostTag";
import { UserCard } from "../UserCard";
import { PostContainer } from "../PostContainer";

describe("PostContainer", () => {
  it("renders the PostContainer component", () => {
    render(
      <PostContainer
        post={{
          id: "1",
          text: "test text is here!",
          image: "http://test.com",
          publishDate: "2023-23-23",
          owner: {
            id: "1",
            title: "ms",
            firstName: "george",
            lastName: "stalone",
            picture: "http://test.com",
          },
          tags: ["my-tag"],
          likes: 1,
        }}
      />
    );
    const linkElement = screen.getByText(/test text is here!/i);
    expect(linkElement).toBeDefined();
  });
});

describe("PostTag", () => {
  it("renders the PostTag component", () => {
    render(<PostTag tag="water" />);
    const linkElement = screen.getByText(/water/i);
    expect(linkElement).toBeDefined();
  });
});

describe("PostComment", () => {
  it("renders the PostComment component", () => {
    render(
      <PostComment
        comment={{
          id: "1",
          message: "this is my message!",
          post: "hello how are you",
          publishDate: "2023-23-23",
          owner: {
            id: "1",
            title: "ms",
            firstName: "maria",
            lastName: "stalone",
            picture: "http://test.com",
          },
        }}
      />
    );
    const linkElement = screen.getByText(/maria/i);
    expect(linkElement).toBeDefined();
  });
});

describe("UserCard", () => {
  it("renders the UserCard component", () => {
    render(
      <UserCard
        user={{
          id: "1",
          title: "ms",
          firstName: "test",
          lastName: "lastname",
          picture: "http://test.com",
        }}
      />
    );
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeDefined();
  });
});
