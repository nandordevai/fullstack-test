export async function POST(req, res) {
    // const params = await req.json()
    const auth = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
        }),
    })
    const data = await auth.json();
    if (data.token) {
        res.redirect(307, '/success')
    } else {
        res.redirect(307, '/login')
    }
}
