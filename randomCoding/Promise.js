function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data Loaded'), 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}
