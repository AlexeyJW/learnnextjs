import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
    return (
        <form action={postTweet}
            className="border border-white/10 rounded-lg p-4 mb-6 bg-gray-800 text-white"
            >
                <input 
                    type="text"
                    name="content"
                    placeholder="content"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
                         />
                <div className="flex items-center justify-between mt-4">
                    <button
                        type="submit"
                        className="bg-white text-black text-sm font-semibold px-4
                        py-1.5 rounded-full hover: bg-gray-200 transition">
                        Tweet
                        </button>


                </div>
        </form>
    )
}