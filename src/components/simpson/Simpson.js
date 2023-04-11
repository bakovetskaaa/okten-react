const Simpson = ({item}) =>{
    return(
        <p>
            <div>Name is: {item.name}</div>
            <div>Surname: {item.surname}</div>
            <div>Age: {item.age}</div>
            <div>Info: {item.info}</div>
            <div><img src={item.photo}></img></div>
        </p>
    )
}

export default Simpson;