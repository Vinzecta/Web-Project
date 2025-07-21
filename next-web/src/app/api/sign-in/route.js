import users from "@/app/data/user";

export async function POST(request) {
    const body = await request.json();

    const user = users.find(u => u.email === body.email && u.password === body.password);

    if (user) {
        return Response.json({success: true});
    } else {
        return Response.json({success: false}, {status: 401});
    }
}