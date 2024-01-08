const Tweet = (props) => {
    return (
        <div>
            {props.tweets.map(tweet => <div class="tweetContainer">
                                            <div class="tweetHeader">
                                                <p class="headerItem">{tweet.username}</p>
                                                <p class="headerItem">{tweet.user}</p>
                                                <p class="headerItem">{tweet.createdAt}</p>
                                            </div>
                                            <p>{tweet.message}</p>
                                        </div>)}
        </div>
    );
}