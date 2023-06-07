import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('title: ', title);
        setQuery(title); 
    }

    return ( 
        <div className="form-search">
            <h2>Búscar Películas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Titulo de la Película" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Buscar" />
            </form>
            { error && <p className="error"> <h1>LO SENTIMOS LA PELÍCULA QUE BÚSCA NO EXISTE...!!</h1></p> }
        </div>
    );
}
 
export default FormSearch;