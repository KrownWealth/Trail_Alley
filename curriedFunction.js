const url = 'https://jsonplaceholder.typicode.com/todo';
const isloadingSpan = document.querySelector('.isloading');

const getData = (url) => {
    console.log('loading')
    isloadingSpan.textContent = 'True';

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error('Could not retrieve data')
            }

            const data = await res.json();
        } catch (err) {
            console.log(err)
        }
        console.log('Loading Complete')
        isloadingSpan.textContent = 'False';
    }

    return fetchData(url);

}

getData(url)
