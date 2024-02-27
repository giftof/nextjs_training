import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'
// import MovieProviders from '../../../../components/movie-providers'
// import MovieSimilar from '../../../../components/movie-similar'
// import MovieCredits from '../../../../components/movie-credits'

interface IParams { params: {id: string} }

export async function generateMetadata({params: {id}}: IParams) {
    const movie = await getMovie(id)
    return { title: movie.title }
}

export default async function MovieDetail({params: {id}}: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}> {/*fallback is like PLACE_HOLDER*/}
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
            {/* <Suspense fallback={<h1>Loading movie credits</h1>}>
                <MovieCredits id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie providers</h1>}>
                <MovieProviders id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie similar</h1>}>
                <MovieSimilar id={id} />
            </Suspense> */}
        </div>
    )
}

// test url: http://localhost:3000/movies/123?region=kr&page=2
