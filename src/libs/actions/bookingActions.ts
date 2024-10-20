"use server";
import { fetchWrapper } from "../api/fetchWrapper";

export const getBookingsData = async () => {
  return await fetchWrapper.get("/userBookings");
};

export const createBooking = async (userBookings: any) =>
  await fetchWrapper.post("/userBookings", userBookings);
export const updateBooking = async (userBookings: any) =>
  await fetchWrapper.put(`/userBookings/${userBookings.id}`, userBookings);
export const deleteBooking = async (id: number) =>
  await fetchWrapper.del(`/userBookings/${id}`);
