const API_KEY = '99af4a291d52887b975a2fc332df6ad7';
const API_URL = 'https://api.themoviedb.org/3';

/**
 *
 * @param endpoint
 * @returns {Promise<any>}
 */
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL}${endpoint}`);
    const json = await req.json();
    return json;
}


/**
 *  Original
 *  Recommended
 *  Top rated
 */
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Original Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Original Netflix',
                items: await basicFetch(`/movie/top_rated?language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Original Netflix',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'war',
                title: 'Filmes Guerra',
                items: await basicFetch(`/discover/movie?with_genres=10752&language=pt-PT&api_key=${API_KEY}`)
            },
        ]
    }

}