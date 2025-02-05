import { useNavigate } from "react-router-dom";

export const useSearcher = ( q , res ) => {

    const navigate = useNavigate();

    const onSearchSumbit = (event, searchText ) => {
        event.preventDefault();

        // if (searchText.trim().length <= 1) return;

        return navigate(`?q=${ searchText }`);
    };

    return {
        showSearch : (q.length === 0),
        showError : (q.length > 0) && res.length === 0,
        onSearchSumbit,
        q,
    }
}
