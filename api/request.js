export async function request(query, options = {}) {
  const { variables } = options

  try {
    const res = await fetch(
      `${process.env.STRAPI_APP_URL}/graphql`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables
        })
      }
    )

    const json = await res.json()
    console.log('response json: ', json)

    if (json.errors) {
      console.error(json.errors)
      return {
        error: json.errors,
        data: null
      }
    }

    return {
      error: null,
      data: json.data
    }
  } catch (error) {
    console.error(error)
    return {
      error,
      data: null
    }
    // throw new Error('Failed to fetch data.')
  }
}