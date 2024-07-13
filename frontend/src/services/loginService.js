const baseUrl = "/api/auth/login";

const login = async (credentials) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: 'include'
    });

    const data = await response.json();
    console.log(`login service data: ${JSON.stringify(data)}`)
    return data;
};

export default login;
