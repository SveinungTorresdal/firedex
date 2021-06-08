const url = '/api'
const parseParams = params => new URLSearchParams(params).toString()

const endpoints = {
    cover: id => fetch(`${url}/cover/${id}`, {
        headers: { accepts: 'application/json' },
        method: 'GET'
    }),
    search: params => fetch(`${url}/manga${params ? '?' : ''}${parseParams(params)}`, {
        headers: { accepts: 'application/json' },
        method: 'GET'
    })
}

export default endpoints
