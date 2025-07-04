export const getGifs = async (category) =>{
    const apiKey = 'zUGssnpiIzsV75kLcC3ukELOwBOmGZOQ';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=5`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
};