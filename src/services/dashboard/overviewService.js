export const getOverviewData = async () => {
    const res = await fetch(`${process.env.API_URL}dashboards`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzgsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImJPTVdJNiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzgsIm1lbWJlcklkIjo1Niwic3ViIjoibWVnYW5vdGNsb25lQGdtYWlsLmNvbSIsImlhdCI6MTcxODAwMzgzMywiZXhwIjoxNzE4ODY3ODMzfQ.nxMolNOTpbgoZ3qoERBY3YVZbVRyQiuEo4CCp7zDwms',
                'Content-Type': 'application/json'
            }
        }
    )
    const data = await res.json();
    return data
}