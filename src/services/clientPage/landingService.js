export const getAllEvents = async () => {
    const res = await fetch(`${process.env.API_URL}landing-page`,
        { cache: "no-store" }
    )
    const data = await res.json();
    return data
}

export const getEventById = async (id) => {
    const res = await fetch(`${process.env.API_URL}landing-page/${id}`,
        { cache: "no-store" }
    )
    const data = await res.json();
    return data
}

export const getEventByCateName = async (name) => {
    const res = await fetch(`${process.env.API_URL}landing-page/filter/${name}`,
        { cache: "no-store" }
    )
    const data = await res.json();
    return data
}

export const getPopularEvent = async () => {
    const res = await fetch(`${process.env.API_URL}landing-page/getAllPopularEvent`,
        { cache: "no-store" }
    )
    const data = await res.json();
    return data
}

export const findEvent = async () => {
    const res = await fetch(`${process.env.API_URL}landing-page/getAllPopularEvent`,
        { cache: "no-store" }
    )
    const data = await res.json();
    return data
}