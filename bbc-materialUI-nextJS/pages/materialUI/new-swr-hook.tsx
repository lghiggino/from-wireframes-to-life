import useSWR from 'swr'
import Link from "next/link"
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/'
})


export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error }
}


const UserList: React.FC = () => {
  const { data } = useFetch("users");

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;


///<Link href="/materialUI">back to materialUI index</Link>