
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import {HeroCard} from '../components/'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

    const Navigate = useNavigate();
    const Location = useLocation();
    const {q = ''} = queryString.parse(location.search)

    const Heroes = getHeroesByName(q);
    const showSearch = (q.length ===0);
    const showError = (q.length > 0) && Heroes.length ===0


    const {searchText, onInputChange} = useForm({
      searchText: q
    })

    const onSearchSubmit = (event) => {
      event.preventDefault();
      if(searchText.trim().length <= 1) return;

      Navigate(`?q=${searchText}`)

    }

    return (
      <>
        <h1>Buscador</h1>
        <hr />

        <div className="row">
            <div className="col-5">
                <h4>Busqueda</h4>
                <hr />
                <form onSubmit={onSearchSubmit}>
                  <input 
                  type="text"
                  placeholder="Busca un heroe"
                  className="form-control"
                  name="searchText"
                  autoComplete="off" 
                  value={searchText}
                  onChange={onInputChange}/>

                  <button className="btn btn-outline-primary mt-2"> 
                    Search
                  </button>
                </form>
            </div>

            <div className="col-7">
              <h4>Resultados</h4>
              <hr />

              {/*
                  (q === '')
                  ? <div className="alert alert-primary"> Busca un heroe </div>
                  : (Heroes.length ===0) && <div className="alert alert-danger"> No hay ningun resultado con <b>{q}</b> </div>

              */}

              <div className="alert alert-primary animate__animated animate__fadeIn" 
              style={{display: showSearch ? '' : 'none'}}> 
              Busca un heroe 
              </div>
              
              <div className="alert alert-danger animate__animated animate__fadeIn"
              style={{display: showError ? '' : 'none'}}> 
              No hay ningun resultado con <b>{q}</b> 
              </div>
              




              {
                Heroes.map( hero => (
                  <HeroCard key={hero.id} {...hero}/>
                ))
              }

            </div>

        </div>


      
      
      </>
    )
  }
  