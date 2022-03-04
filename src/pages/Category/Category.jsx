import { useHistory } from "react-router";
import { CardItem } from "../../components/general/CardItem";
import { CardWrapper } from "../../components/general/CardWrapper";
import useFetch from "../../hooks/useFetch"
import {API_BASE_URL} from "../../config/consts";

function Category() {
    const history = useHistory();
    const {data: categories,loading} = useFetch(`${API_BASE_URL}categories`)

    if (loading){
        return <h1>Loading...</h1>
    }
    return (
        <CardWrapper theme="primary" title="Категории">
            {categories && categories.map(c => (
                <CardItem
                    key={c._id} title={c.name} body={c.description} footer={"Тестов: " + c.testCount}
                    onClick={() => history.push('/category/' + c.id)} />
            ))}
        </CardWrapper>
    );
}

export { Category };