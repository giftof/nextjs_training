import { Metadata } from 'next'
import Movie from '../../components/movie'
import styles from '../../styles/home.module.css'
import { API_MOVIE_LIST } from '../api-path'

export const metadata: Metadata = { title: 'Home' }

// export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch(API_MOVIE_LIST)
    const json = await response.json()
    return json
}

export default async function Index() {
    const movies = await getMovies()
    return (
        <div className={styles.container}>
            {movies.map((
                movie: {id: string, title: string, poster_path: string}
            ) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path} 
                />
            ))}
        </div>
    )
}
