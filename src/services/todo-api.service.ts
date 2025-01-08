const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async () => {
    const response = await fetch(baseUrl);

    return response.json();
}