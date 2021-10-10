const BASE_URLA = "https://newsapi.org/v2/";
const API_KEY = "d7a2dd38768541f786ab4722e8ed6d9e";


export const getNews = (category) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URLA}top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                resolve(json.articles)
                // setNews(json.articles)
            }).catch(error => reject(error))
    })
    
}

export const getNewsSecond = async (category) => {
    try{
        const data  = await fetch(`${BASE_URLA}top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
        const response = await data.json();
        return response.articles;
    }catch(error){
        console.log("API",error)
        return null;
    }
    
    
}