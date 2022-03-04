import {useEffect, useState} from "react";

const useFetch = (url, options) => {

    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    });

    function fetchNow(url, options) {
        setStatus({loading: true});
        fetch(url, options)
            .then((res) => {
                if (res.status !== 200) {
                    console.log(res)
                    res.json().then(e => setStatus({loading: false, error: e}))
                }
                else {
                    res.json().then((res) => {
                        console.log(res)
                        setStatus({loading: false, data: res});
                    }).catch((error) => {
                        setStatus({loading: false, error});
                    });
                }
            })
    }

    useEffect(() => {
        if (url) {
            fetchNow(url, options);
        }
    }, [options, url]);

    return { ...status };
}

export default useFetch