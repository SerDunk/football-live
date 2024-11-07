import { currentUser } from "@clerk/nextjs/server";
import db from "./db";

export default async function checkUser() {
  const user = await currentUser();

  //Check if user exists
  if (!user) {
    return null;
  }

  //Check if user in database

  const loggedUser = await db.user.findFirst({
    where: {
      clerkId: user.id,
    },
  });

  //If user exists , return from database
  if (loggedUser) {
    return loggedUser;
  }

  //If user doesn't exist , create new
  const newUser = await db.user.create({
    data: {
      clerkId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
}
