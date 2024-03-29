import { API_MOVIE_LIST } from '../app/api-path'
import styles from '../styles/movie-videos.module.css'

async function getVideos(id: string) {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const response = await fetch(`${API_MOVIE_LIST}/${id}/videos`)
    const json = await response.json()
    return json
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id)

    return (
        <div className={styles.container}>
            {videos.map(
                (
                    video: {key: string, id: string, name: string}
                ) => (
                    <iframe
                        key={video.id} 
                        src={`https://youtube.com/embed/${video.key}`}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        title={video.name}
                    />
                )
            )}
        </div>
    )
}
