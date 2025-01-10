const baseUrl = import.meta.env.VITE_API_BASE_URL;
console.log(baseUrl)

export const urls = {
    users: {
        all: `${baseUrl}/users`,
    },
    posts: {
        all: `${baseUrl}/posts`,
    },
};