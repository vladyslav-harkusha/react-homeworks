const baseUrl = 'https://dummyjson.com/todos';

export const getTodos = async () => {
    const response = await fetch(baseUrl);

    return response.json();
}