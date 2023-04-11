const Rickandmorty = ({item}) =>{
    return(
        <p>
            <div>Id: {item.id}</div>
            <div>Name is: {item.name}</div>
            <div>Status: {item.status}</div>
            <div>Species: {item.species}</div>
            <div>Type: {item.type}</div>
            <div>Gender: {item.gender}</div>
            <div><img src={item.photo}></img></div>
        </p>
    )
}

export default Rickandmorty;