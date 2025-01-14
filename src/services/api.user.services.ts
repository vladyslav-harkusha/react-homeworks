const baseUrl = import.meta.env.VITE_API_USERS_URL;

export const usersService = {
    getUsersByPage: async (page: number, limit: number) => {
        const response = await fetch(`${baseUrl}?skip=${(page - 1) * limit}&limit=${limit}`);

        return response.json();
    },
};