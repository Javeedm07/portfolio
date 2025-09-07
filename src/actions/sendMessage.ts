"use server";

import { z } from "zod";
import { adminDb } from "@/lib/firebase";
import { FieldValue } from "firebase-admin/firestore";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendMessage(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid data" };
  }

  try {
    await adminDb.collection("messages").add({
      ...parsed.data,
      timestamp: FieldValue.serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: "Failed to send message" };
  }
}

export async function verifyPassword(password: string) {
  const isCorrect = password === process.env.MESSAGES_PASSWORD;
  return { success: isCorrect };
}
