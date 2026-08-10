"use server"

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("MAKE_WEBHOOK_URL no está configurada en el entorno.");
    return { success: false, error: "Error de configuration del servidor." };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Webhook devolvió error: ${response.status}`);
      return { success: false, error: "Error al enviar la solicitud." };
    }

    return { success: true };
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return { success: false, error: "Error interno del servidor." };
  }
}
