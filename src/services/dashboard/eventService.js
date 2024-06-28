import { headerToken } from "@/app/api/auth/headerToken";
import daisyui from "daisyui";

export const getAllEventsService = async () => {
    const header = await headerToken()
    const res = await fetch(`${process.env.API_URL}events`,
        {
            cache: "no-store",
            headers: header
        }
    )
    const data = await res.json();
    return data
}
export const getEventByIdService = async (id) => {
    const header = await headerToken()
    const res = await fetch(`${process.env.API_URL}events/${id}`,
        {
            next: { tags: ['events'] },
            cache: "no-store",
            headers: header
        }
    )
    const data = await res.json();
    return data
}

export const getAllCategoryService = async () => {
    const header = await headerToken()
    const res = await fetch(`${process.env.API_URL}categories?offset=1&limit=100`,
        {
            next: {tags: ['events']},
            method: "GET",
            cache: "no-store",
            headers: header
        }
    )
    const data = await res.json();
    return data
}

export const getCategoryName = async (cateName) => {
    const header = await headerToken();
    const res = await fetch(`${process.env.API_URL}categories/${cateName}`, {
        next: { tags: ["categories"] },
        method: 'GET',
        cache: "no-store",
        headers: header
    }
    );
    const data = await res.json()
    return data
}
export const findEvent = async (searchData) => {
    const header = await headerToken();
    const handlerToken = {
        next: { tags: ["events"] },
        method: 'GET',
        cache: "no-store",
        headers: header
    };
    let res;
    try {
        if (searchData.categoryId) {
            res = await fetch(`${process.env.API_URL}events/search?categoryId=${searchData?.categoryId}&status=${searchData.status}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`, handlerToken);
        } else {
            res = await fetch(`${process.env.API_URL}events/search?&eventName=${searchData.eventName}&status=${searchData.status}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`, handlerToken);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
};

export const deleteEventById = async (eventId) => {
    const header = await headerToken();
      const res = await fetch(`${process.env.API_URL}events/${eventId}`, {
        next: { tags: ["events"] },
        method: "DELETE",
        headers: header,
      });
      const data = await res.json();
    return data;
}

export const updateEventService = async (eventId, data) => {
    const header = await headerToken();
    const res = await fetch(`${process.env.API_URL}events/${eventId}`, {
      next: { tags: ["events"] },
      method: "PUT",
      headers: header,
      body: JSON.stringify(data),
    });
    const dataEvent = await res.json();
    return dataEvent;
    
  };

export const changeStatus = async (eventId) => {
    console.log("status:",eventId);
    const header = await headerToken();
    const res = await fetch(`${process.env.API_URL}events/active/${eventId}`, {
        next: { tags: ["events"] },
        method: "PUT",
        headers: header,
        body: JSON.stringify(data),
      });
      const dataEvent = await res.json();
      return dataEvent;
};


