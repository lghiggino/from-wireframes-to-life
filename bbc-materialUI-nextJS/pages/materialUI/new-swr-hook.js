import useSWR from 'swr'
import Link from "next/link"

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Profile() {
  const { data, error } = useSWR('/api/user/123', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return (
    <div>
      hello {data.name}!
      <Link href="/materialUI">back to materialUI index</Link>
    </div>
  )

}

export default Profile