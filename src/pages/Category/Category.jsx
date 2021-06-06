import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { categoriesApi } from "../../api/categoriesApi";
import { CardItem } from "../../components/general/CardItem";
import { CardWrapper } from "../../components/general/CardWrapper";

function Category() {
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setCategories(categoriesApi);
    }, []);

    return (
        <CardWrapper theme="primary" title="Категории">
            {categories && categories.map(c => (
                <CardItem
                    key={c.id} title={c.name} body={c.description} footer={"Тестов: " + c.testCount}
                    onClick={() => history.push('/category/' + c.id)} />
            ))}
        </CardWrapper>
    );
}

export { Category };