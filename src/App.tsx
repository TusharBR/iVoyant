import useFetch from "./UseFetch";

interface usertype
{
  id:number,
  name:string,
  email:string,
  city:string,
  zipcode:string,
  phone:string,
  website:string
}

const UserList = () => {
  const { data, loading, error } = useFetch<usertype[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;  

  return (
    <div>
      <h2>User List</h2>
      <ul>
      <li >Name Email</li>
        
        {data?.map((user:usertype) => (
          <li key={user.id}>{user.name} - {user.email} - {user.city} - {user.zipcode} - {user.phone} - {user.website}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
