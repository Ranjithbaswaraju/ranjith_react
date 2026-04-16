const UserCard=({user})=>{
    return(
        <div  className="bg-blue shadow-lg rounded-2xl p-6 text-center">
        <img src={user.avatar}/>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
    )
}

export default UserCard;