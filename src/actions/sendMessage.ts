"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
    await addDoc(collection(db, "messages"), {
      ...parsed.data,
      timestamp: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: "Failed to send message" };
  }
}
