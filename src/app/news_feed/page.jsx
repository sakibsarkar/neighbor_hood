import Navbar from "../../components/Navbar/Navbar";
import FeedIndex from "../../components/news-feed/FeedIndex/FeedIndex";
import PersonalFeed from "../../components/news-feed/PersonalFeed/PersonalFeed";
import UserContent from "../../components/news-feed/UserContent/UserContent";
import './NewsFeed.css'

const page = () => {
  return (
    <div className="news-feed-page-wrapper">
      <Navbar />
      <div className="news-feed-main-container">
        <FeedIndex />
        <PersonalFeed />
        <UserContent />
      </div>
    </div>
  );
};

export default page;
