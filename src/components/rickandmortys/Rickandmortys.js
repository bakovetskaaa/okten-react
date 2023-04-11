import Rickandmorty from "../rickandmorty/Rickandmorty";


function Rickandmortys({yyy: rickandmortys}) {

    return(
        <div>
            {
                rickandmortys.map((value, index) =>(<Rickandmorty item ={value} key={index}/>))
            }

        </div>
    );
}


export default Rickandmortys;