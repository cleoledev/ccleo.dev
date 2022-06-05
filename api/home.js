import { request } from './request'

const QUERY = `
query {
  home {
    data {
      id
      attributes {
        about {
          title
          content
        }
        portfolios {
          id
          title
          content
          techstack
          link
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        experiences {
          id
          title
          position
          content
          start_at
          end_at
        }
        skills {
          name
          icon
        }
      }
    }
  }
}
`

export async function fetchData() {
  const res = await request(QUERY)
  return res.error ? null : res.data.home
}