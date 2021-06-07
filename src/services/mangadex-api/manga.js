const url = '/api'
const parseParams = params => new URLSearchParams(params).toString()

const endpoints = {
    search: params => fetch(`${url}/manga${params ? '?' : ''}${parseParams(params)}`, {
        headers: { accepts: 'application/json' },
        method: 'GET'
    })
}

export default endpoints
