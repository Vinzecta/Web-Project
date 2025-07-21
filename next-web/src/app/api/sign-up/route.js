import users from "@/app/data/user";

export async function POST(request) {
    const newUser = await request.json();
    users.push(newUser);
    return Response.json({status: 201});
}