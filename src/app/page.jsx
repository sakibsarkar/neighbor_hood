"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const user = true;
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/news_feed");
    } else {
      router.push("/singin");
    }
  }, [router, user]);
  
  return <div></div>;
};

export default Home;
