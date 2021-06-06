import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { categoriesApi } from "../../api/categoriesApi";
import { testsApi } from "../../api/testApi";
import { CardItem } from "../../components/general/CardItem";
import { CardWrapper } from "../../components/general/CardWrapper";

function SelectedCategorty() {
    const { id } = useParams();
    const history = useHistory();
    const [tests, setTests] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const intId = Number.parseInt(id);
        if (intId) {
            const category = categoriesApi.find(c => c.id === intId)

            if (category) {
                setCategory(category);
                const testResult = testsApi.filter(t => t.category.toLowerCase() === category.name.toLowerCase());
                if (testResult) {
                    setTests(testResult);
                }
            }
        }
    }, [id]);

    if (!category){
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

export { SelectedCategorty };