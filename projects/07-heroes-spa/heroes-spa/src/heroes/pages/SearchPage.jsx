import queryString from "query-string";

import { useForm , useSearcher } from "../../hooks";
import { useLocation } from "react-router-dom";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { showSearch , showError , onSearchSumbit } = useSearcher( q , heroes );

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={(event) => onSearchSumbit( event, searchText)}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '') 
            ? <div className="alert alert-primary"> Search a hero </div>
            : ( heroes.length === 0) 
            && <div className="alert alert-danger"> No hero with <b> { q } </b> </div>
          } */}
          {/* 
          <div className="alert alert-primary animate__animated animate__fadeIn" 
              style={{display : showSearch ? '' : 'none'}}> 
            Search a hero 
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
              style={{display : showError ? '' : 'none'}}> 
            No hero with <b> { q } </b> 
          </div> */}

          {showSearch 
            && 
            (
              <div
                className="alert alert-primary animate__animated animate__fadeIn"
                style={{ display: showSearch ? "" : "none" }}
              >
                Search a hero
              </div>
            )
          }

          {showError && 
            (
              <div
                className="alert alert-danger animate__animated animate__fadeIn"
                style={{ display: showError ? "" : "none" }}
              >
                No hero with <b> { q } </b>
              </div>
            )
          }

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

        </div>
      </div>
    </>
  );
};
