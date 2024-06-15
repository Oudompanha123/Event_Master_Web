// Get All Member
export const getAllMemberService = async () => {
    const res = await fetch(`${process.env.API_URL}members`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDMsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IjN5NENSNSIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDMsIm1lbWJlcklkIjo2MSwic3ViIjoic2ltcGhhbGxlbmdAZ21haWwuY29tIiwiaWF0IjoxNzE4MzMwNjc0LCJleHAiOjE3MTkxOTQ2NzR9.kRNjzDcgl4JCVvM7rDwmSsrghp4r2JZpF9AM4EgrPN8',
                'Content-Type': 'application/json'
            }
        }
    )
    const data = await res.json();
    console.log("Data:",data)
    return data
}