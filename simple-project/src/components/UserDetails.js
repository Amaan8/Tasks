const UserDetails = (props) => {
  return (
    <div>
        <ul>
            {props.userDetails.map((user) => (
                <li key={user.id}>
                    {user.username} ({user.age} years old)
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserDetails