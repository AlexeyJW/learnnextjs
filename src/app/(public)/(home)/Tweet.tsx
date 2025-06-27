import type { ITweet } from "@/shared/types/Tweet.interface"

interface Props {
    tweet: ITweet;
}

export function Tweet({tweet}: Props) {
    return (
        <div>
            <p>{tweet.text}</p>
            <span>@{tweet.author}</span>
        </div>
    )
}