import { buildDomain } from "./domain"

const baseUrl = buildDomain();

const doFetch = async (url: string, method: string, doThen?: (data: any) => void, body?: string) => {
    let requestBody = {}

    if (method === 'POST' || method === 'PATCH') {
        requestBody = { body }
    }

    return fetch(`${baseUrl}/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        ...requestBody
    })
        .then((response) => response.json())
        .then((data) => doThen && doThen(data))
}

export default doFetch;