import { API_MOVIE_LIST } from '../app/api-path'

async function getProviders(id: string) {
    const response = await fetch(`${API_MOVIE_LIST}/${id}/providers`)
    const json = await response.json()
    return json
}

export default async function MovieProviders({id}: {id: string}) {
    const video = await getProviders(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
