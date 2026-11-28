// The landing page is public and server-rendered, so an unreachable API used to
// reject inside the server component and turn the whole page into a 500. These
// requests degrade to an empty payload instead, and the page renders a notice.
const unreachable = (url, error) => {
    console.error(`[landingService] ${url} failed:`, error?.cause?.code ?? error?.message ?? error)
    return { payload: null, unreachable: true }
}

const safeFetch = async (url, options = {}) => {
    try {
        const res = await fetch(url, options)
        if (!res.ok) return unreachable(url, new Error(`HTTP ${res.status}`))
        return await res.json()
    } catch (error) {
        return unreachable(url, error)
    }
}


export const getAllEvents = async () => {
    return safeFetch(`${process.env.API_URL}landing-page`)
}

export const getEventById = async (id) => {
    return safeFetch(`${process.env.API_URL}landing-page/${id}`, { cache: "no-store" })
}

export const getEventByCateNameLoading = async ({ name, page }) => {
    return safeFetch(`${process.env.API_URL}landing-page/filter/${name}?offset=${page}&limit=8`, {
        next: { tags: ['overview_event'] },
    })
}

export const getEventByCateName = async (name) => {
    return safeFetch(`${process.env.API_URL}landing-page/filter/${name}`, {
        next: { revalidate: 30 }
    })
}

export const getPopularEvent = async () => {
    return safeFetch(`${process.env.API_URL}landing-page/getAllPopularEvent`, {
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
    })
}

export const findEvent = async (searchData) => {
    let res;
    if (searchData.categoryName) {
        res = await safeFetch(`${process.env.API_URL}landing-page/search?eventName=${searchData.eventName}&categoryName=${searchData.categoryName}&status=${searchData.status}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`)
    } else {
        res = await safeFetch(`${process.env.API_URL}landing-page/search?eventName=${searchData.eventName}&status=${searchData.status}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`)
    }
    return res
}

export const getAllCategory = async () => {
    return safeFetch(`${process.env.API_URL}landing-page/getAllCategoryNames`, {
        next: { tags: ['overview'] },
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
    })
}

export const getFormById = async (id) => {
    return safeFetch(`${process.env.API_URL}landing-page/form/${id}`)
}