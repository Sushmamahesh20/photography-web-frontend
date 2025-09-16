export async function sendEmail({ body}) {
    try {
        const response = await fetch("https://localhost:8443/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error("Failed to send email:", error);
        throw error;
    }
}