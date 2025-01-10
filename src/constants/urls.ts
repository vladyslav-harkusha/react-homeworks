const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const urls = {
    users: {
        all: `${baseUrl}/users`,
        byId: (id: number) => `${baseUrl}/users/${id}`,
    },
    posts: {
        all: `${baseUrl}/posts`,
    },
    carts: {
        byUserId: (userId: number) => `${baseUrl}/carts/user/${userId}`,
    }
};