"use server";

export async function verifyPassword(password: string): Promise<boolean> {
  const isCorrect = password === process.env.MESSAGES_PASSWORD;
  return isCorrect;
}
