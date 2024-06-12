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

export const getAllCategory = async (page) => {
    const res = await fetch(`${process.env.API_URL}categories?offset=${page ? page : 1}&limit=8`,
        {
            next: { tags: ['overview'] },
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzgsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImJPTVdJNiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzgsIm1lbWJlcklkIjo1Niwic3ViIjoibWVnYW5vdGNsb25lQGdtYWlsLmNvbSIsImlhdCI6MTcxODAwMzgzMywiZXhwIjoxNzE4ODY3ODMzfQ.nxMolNOTpbgoZ3qoERBY3YVZbVRyQiuEo4CCp7zDwms',
                'Content-Type': 'application/json'
            }
        }
    )
    const data = await res.json();
    console.log('code goes here')
    return data
}

export const insertCategory = async (userInput) => {
    const res = await fetch(`${process.env.API_URL}categories?categoryName=${userInput}`,
        {
            next: { tags: ['overview'] },
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzgsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImJPTVdJNiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzgsIm1lbWJlcklkIjo1Niwic3ViIjoibWVnYW5vdGNsb25lQGdtYWlsLmNvbSIsImlhdCI6MTcxODAwMzgzMywiZXhwIjoxNzE4ODY3ODMzfQ.nxMolNOTpbgoZ3qoERBY3YVZbVRyQiuEo4CCp7zDwms',
                'Content-Type': 'application/json'
            }
        }
    )
}

export const deleteCategory = async (id) => {
    const res = await fetch(`${process.env.API_URL}categories/${id}`,
        {
            next: { tags: ['overview'] },
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzgsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImJPTVdJNiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzgsIm1lbWJlcklkIjo1Niwic3ViIjoibWVnYW5vdGNsb25lQGdtYWlsLmNvbSIsImlhdCI6MTcxODAwMzgzMywiZXhwIjoxNzE4ODY3ODMzfQ.nxMolNOTpbgoZ3qoERBY3YVZbVRyQiuEo4CCp7zDwms',
            }
        }
    ) 
}

export const updateCategory = async (id, categoryName) => {
    const res = await fetch(`${process.env.API_URL}categories/${id}?categoryName=${categoryName}`,
        {
            next: { tags: ['overview'] },
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzgsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImJPTVdJNiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzgsIm1lbWJlcklkIjo1Niwic3ViIjoibWVnYW5vdGNsb25lQGdtYWlsLmNvbSIsImlhdCI6MTcxODAwMzgzMywiZXhwIjoxNzE4ODY3ODMzfQ.nxMolNOTpbgoZ3qoERBY3YVZbVRyQiuEo4CCp7zDwms',
            }
        }
    ) 
}