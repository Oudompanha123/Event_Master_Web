export const getAttendeeByEventIdService = async (id) => {
    const res = await fetch(`${process.env.API_URL}attendees/${id}`,
        {
            cache: "no-store",
            headers: {
                'Authorization': ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDMsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IjN5NENSNSIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDMsIm1lbWJlcklkIjo2MSwic3ViIjoic2ltcGhhbGxlbmdAZ21haWwuY29tIiwiaWF0IjoxNzE4MDc0MjM2LCJleHAiOjE3MTg5MzgyMzZ9.9lGgjQfnBe90ATbXniWZWCDCXuNA7Lkvj4BtlkPdTCw',
                'Content-Type': 'application/json'
            }
        }
    )
    
    const data = await res.json();
    return data
}
  