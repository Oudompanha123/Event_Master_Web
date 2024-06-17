
export const getAllEvents = async () => {
    const res = await fetch(`${process.env.API_URL}landing-page`)
    const data = await res.json();
    return data
}

export const getEventById = async (id) => {
    const res = await fetch(`${process.env.API_URL}landing-page/${id}`)
    const data = await res.json();
    return data
}

export const getEventByCateNameLoading = async ({ name, page }) => {
    const res = await fetch(`${process.env.API_URL}landing-page/filter/${name}?offset=${page}&limit=8`)
    const data = await res.json();
    return data
}

export const getEventByCateName = async (name) => {
    const res = await fetch(`${process.env.API_URL}landing-page/filter/${name}`)
    const data = await res.json();
    return data
}

export const getPopularEvent = async () => {
    const res = await fetch(`${process.env.API_URL}landing-page/getAllPopularEvent`)
    const data = await res.json();
    return data
}

export const findEvent = async (searchData) => {
    console.log(searchData.categoryName, 'check eventname')
    const res = await fetch(`${process.env.API_URL}landing-page/search?eventName=${searchData.eventName}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}&status=${searchData.status}&categoryName=${searchData.categoryName}`)
    const data = await res.json()
    return data
}

export const getAllCategory = async () => {
    const res = await fetch(`${process.env.API_URL}landing-page/getAllCategoryNames`)
    const data = await res.json()
    return data
}