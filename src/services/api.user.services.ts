const baseUrl = import.meta.env.VITE_API_USERS_URL;

export const usersService = {
    getAllUsers: async () => {
        const response = await fetch(baseUrl);

        return response.json();
    },
};