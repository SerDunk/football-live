import checkUser from "@/services/checkUser";

export default async function Home() {
  const user = await checkUser();
  console.log(user);
  if (!user) {
    return <div>Login to Post</div>;
  }

  return <div>Welcome to Home Screen {user.name}</div>;
}
