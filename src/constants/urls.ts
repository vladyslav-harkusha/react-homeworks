const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const urls = {
    users: {
        all: `${baseUrl}/users`,
    },
    posts: {
        all: `${baseUrl}/posts`,
    },
};