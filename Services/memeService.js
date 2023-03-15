const fetch = (...args) =>
    import('node-fetch')
        .then(
            ({ default: fetch }) => fetch(...args)
        )

const reddit = () => {
    return fetch('https://www.reddit.com/r/memes/random/.json')
        .then(res => res.json())
}

const giphy = () => {
    return fetch('https://api.giphy.com/v1/gifs/random?api_key=fBJs0sPvnMFUYkdxkaNBE4RfPq8EDjPf&tag=&rating=g')
        .then(res => res.json())
}

module.exports = { reddit, giphy }