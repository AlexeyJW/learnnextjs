import Image from "next/image";
import { Tweet } from "./Tweet";
import { TWEETS } from "@/shared/data/tweets.data";
import { TweetForm } from "./TweetForm";
export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-8">

      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-thin mb-6">Home</h1>
        <TweetForm />
        <div className="space-y-6 text-white/80">
            {TWEETS.map((tweet, index) => (
              <Tweet key={index} tweet={tweet}/>
        ))}
        </div>
       
      </div>
    </div>
   
  );
}
