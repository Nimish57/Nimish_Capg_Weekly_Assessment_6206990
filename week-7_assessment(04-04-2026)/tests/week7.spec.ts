import { test, request, expect } from "@playwright/test";
import testData from "./data.json" assert { type: "json" };
test('Booking Flow', async () => {
    const apiContext = await request.newContext();
    const apiBase = testData.baseUrl;

    // Auth
    const authResponse = await apiContext.post(`${apiBase}/auth`, {
        data: testData.login
    });
    await expect(authResponse).toBeOK();
    const authToken = (await authResponse.json()).token;
    
    // Get all bookings
    const bookingsResponse = await apiContext.get(`${apiBase}/booking`);
    await expect(bookingsResponse).toBeOK();
    const bookingsList = await bookingsResponse.json();
    console.log(bookingsList);
    
    // Get single booking
    const firstBookingId = bookingsList[0].bookingid;
    const singleBookingResponse = await apiContext.get(`${apiBase}/booking/${firstBookingId}`);
    await expect(singleBookingResponse).toBeOK();
    console.log(await singleBookingResponse.json());
    
    // Create booking
    const createResponse = await apiContext.post(`${apiBase}/booking`, {
        data: testData.create
    });
    await expect(createResponse).toBeOK();
    const createdBooking = await createResponse.json();
    console.log(createdBooking);
    const newBookingId = createdBooking.bookingid;
    
    // Update booking (PUT)
    const updateResponse = await apiContext.put(`${apiBase}/booking/${newBookingId}`, {
        headers: {
            Cookie: `token=${authToken}`
        },
        data: testData.update
    });
    await expect(updateResponse).toBeOK();
    console.log(await updateResponse.json());
    
    // Partial update (PATCH)
    const patchResponse = await apiContext.patch(`${apiBase}/booking/${newBookingId}`, {
        headers: {
            Cookie: `token=${authToken}`
        },
        data: testData.patching
    });
    await expect(patchResponse).toBeOK();
    console.log(await patchResponse.json());
});