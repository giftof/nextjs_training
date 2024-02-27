import { API_MOVIE_LIST } from '../app/api-path'

async function getSimilars(id: string) {
    const response = await fetch(`${API_MOVIE_LIST}/${id}/similar`)
    const json = await response.json()
    return json
}

export default async function MovieSimilar({id}: {id: string}) {
    const video = await getSimilars(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
