import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { CardItem } from "../../components/general/CardItem";
import { CardWrapper } from "../../components/general/CardWrapper";
import useFetch from "../../hooks/useFetch"
import {API_BASE_URL} from "../../config/consts";

function SelectedCategory() {
    const { id } = useParams();
    const history = useHistory();
    const [tests, setTests] = useState([]);
    const [category, setCategory] = useState(null);
    const {categoriesData, categoriesFetching} = useFetch(`${API_BASE_URL}categories`)
    const {testsData,testsFetching} = useFetch(`${API_BASE_URL}tests`)

    useEffect(() => {
            if (id) {
                const category = categoriesData.find(c => c._id === id)

                if (category) {
                    setCategory(category);
                    const testResult = testsData.filter(t => t.category.toLowerCase() === category.name.toLowerCase());
                    if (testResult) {
                        setTests(testResult);
                    }
                }
            }
    }, [categoriesData, testsData, id]);

    if (categoriesFetching || testsFetching){
        return <h1>Loading...</h1>
    }

    return (
        <CardWrapper title={category.name} theme="primary">
            {tests && tests.map(t => (
                <CardItem 
                title={t.name} body={t.desc}
                footer={"Автор: " + t.author}
                onClick={() => history.push('/tests/' + t.id)}/>
            ))}
            {tests.length === 0 && <h1>Тут тестов пока нет</h1>}
        </CardWrapper>
    );
}

export { SelectedCategory };