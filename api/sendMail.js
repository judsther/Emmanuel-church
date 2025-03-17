
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
      const response = await fetch("https://jud-dev.infinityfreeapp.com/sendMail.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
      });

      // Verificar si la respuesta es JSON
      const text = await response.text();
      let data;
      try {
          data = JSON.parse(text);
      } catch (error) {
          throw new Error("Respuesta del servidor no es JSON válido: " + text);
      }

      res.status(response.status).json(data);
  } catch (error) {
      console.error("Error en la API:", error);
      res.status(500).json({ message: "Error en el servidor" });
  }
}

  