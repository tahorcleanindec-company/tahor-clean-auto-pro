# Fichas Técnicas (PDFs)

Aquí guardas los PDFs de fichas técnicas de cada producto.

## Cómo agregar una ficha técnica

### Paso 1 — Coloca el PDF aquí

Nombra el archivo de forma simple, sin espacios ni tildes. Por ejemplo:

- `shampoo-for-car.pdf`
- `cera-liquida.pdf`
- `desengrasante.pdf`

### Paso 2 — Asocia el PDF al producto en `app.js`

Abre `app.js`, busca el producto y agrega el campo `fichaTecnica`:

```js
{
  id: 1,
  name: "Shampoo FOR CAR",
  description: "...",
  fichaTecnica: "fichas/shampoo-for-car.pdf",   // ← agrega esta línea
  category: "Lavado",
  images: [...],
  // ...
}
```

### Paso 3 — Listo

Cuando un cliente entra al producto y le da clic a **"Ficha Tecnica"**:
- Si tiene PDF asociado → se abre en pestaña nueva.
- Si no tiene → ve un mensaje "estará disponible pronto".

## Recomendaciones

- **Tamaño máximo:** 5 MB por PDF (para que cargue rápido en móvil).
- **Nombre del archivo:** minúsculas, guiones en vez de espacios, sin tildes.
- Si el PDF lo tienes en Google Drive y quieres usarlo desde ahí (sin subirlo al repo), puedes poner el link público directo:
  ```js
  fichaTecnica: "https://drive.google.com/file/d/XXXX/view"
  ```
