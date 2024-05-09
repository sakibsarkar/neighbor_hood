import CreatePostBox from "./CreatePostBox/CreatePostBox";
import Post from "./Post/Post";
import "./PersonalFeed.css";

export default function PersonalFeed() {
  const postData = [
    {
      postLikes: 10,
      authorFirstName: "Demo",
      authorLastName: "User",
      neighborhoodName: "Marina District",
      main: {
        feed: "But attack can take strange forms. And you will remember the tooth. The tooth. Duke Leto Atreides. You will remember the tooth.",
        
      },
      commentsNum: "2",
      comments: {
        comment1: {
          id: "comment1",
          text: "This is the first comment.",
          author: {
            id: "user1",
            name: "John Doe",
            avatar: "avatar1.jpg",
          },
        },
        comment2: {
          id: "comment2",
          text: "Nice post!",
          author: {
            id: "user2",
            name: "Jane Smith",
            avatar: "avatar2.jpg",
          },
        },
      },
    },
    {
      postLikes: 10,
      authorFirstName: "Demo",
      authorLastName: "User",
      neighborhoodName: "Marina District",
      commentsNum: "3",
      main: {
        feed: "But attack can take strange forms. And you will remember the tooth. The tooth. Duke Leto Atreides. You will remember the tooth.",
        type: "location",
        location: "location",
        img: "/images/business.jpg"
      },
      comments: {
        comment1: {
          id: "comment1",
          text: "This is the first comment.",
          author: {
            id: "user1",
            name: "John Doe",
            avatar: "avatar1.jpg",
          },
        },
        comment2: {
          id: "comment2",
          text: "Nice post!",
          author: {
            id: "user2",
            name: "Jane Smith",
            avatar: "avatar2.jpg",
          },
        },
        comment3: {
          id: "comment3",
          text: "Keep up the good work.",
          author: {
            id: "user3",
            name: "Alice Johnson",
            avatar: "avatar3.jpg",
          },
        },
      },
    },
    {
      postLikes: 5,
      authorFirstName: "Shanta hintz",
      authorLastName: "User",
      neighborhoodName: "Marina District",
      main: {
        feed: "But attack can take strange forms. And you will remember the tooth. The tooth. Duke Leto Atreides. You will remember the tooth.",
        type: "location",
        location: "location",
        img: "test"
      },
      commentsNum: "3",
      comments: {
        comment1: {
          id: "comment1",
          text: "This is the first comment.",
          author: {
            id: "user1",
            name: "John Doe",
            avatar: "avatar1.jpg",
          },
        },
        comment2: {
          id: "comment2",
          text: "Nice post!",
          author: {
            id: "user2",
            name: "Jane Smith",
            avatar: "avatar2.jpg",
          },
        },
        comment3: {
          id: "comment3",
          text: "Keep up the good work.",
          author: {
            id: "user3",
            name: "Alice Johnson",
            avatar: "avatar3.jpg",
          },
        },
      },
    },
  ];

  return (
    <>
      <div className="news-feed-scroll">
        <CreatePostBox />
        {postData.map((post, i) => (
          <div key={i} className="parent-news-feed-post-container">
            <div className="news-feed-post-container">
              <div className="news-feed-post-media-container">
                <Post post={post} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
