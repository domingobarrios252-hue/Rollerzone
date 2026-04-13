# 🚀 GUÍA: Cómo subir RollerZone a Internet (GitHub Pages)

## ¿Qué necesitas?
- Los 3 archivos descargados: `index.html`, `styles.css`, `app.js`
- Una cuenta gratuita en [github.com](https://github.com) (si no tienes, créala)
- Eso es todo. No necesitas instalar nada.

---

## PASO 1 — Crear un repositorio en GitHub

1. Entra en [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón verde **"New"** (arriba a la izquierda)
3. En **"Repository name"** escribe: `rollerzone` (o el nombre que quieras)
4. Asegúrate de que está en **"Public"** (obligatorio para GitHub Pages gratis)
5. Marca la casilla **"Add a README file"**
6. Clic en **"Create repository"**

---

## PASO 2 — Subir los 3 archivos

1. Dentro de tu repositorio, haz clic en **"Add file" → "Upload files"**
2. Arrastra los 3 archivos: `index.html`, `styles.css`, `app.js`
3. Abajo del todo, en el cuadro "Commit changes", deja el mensaje por defecto o escribe "Subir web RollerZone"
4. Haz clic en **"Commit changes"**

---

## PASO 3 — Activar GitHub Pages

1. En tu repositorio, haz clic en **"Settings"** (pestaña de arriba)
2. En el menú de la izquierda, busca **"Pages"**
3. En **"Source"**, selecciona **"Deploy from a branch"**
4. En **"Branch"**, selecciona **"main"** y la carpeta **"/ (root)"**
5. Haz clic en **"Save"**

---

## PASO 4 — ¡Tu web ya está en internet!

Espera 1-2 minutos y luego entra en:

```
https://TU-USUARIO.github.io/rollerzone/
```

(Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub)

GitHub Pages te mostrará también la URL exacta en la sección Settings → Pages.

---

## ✅ ¿Necesito Firebase?

**Para la versión actual: NO.**

Tu web RollerZone es completamente estática (HTML + CSS + JS). Los datos como noticias, eventos y entrevistas se guardan en la memoria del navegador mientras la página está abierta.

**¿Cuándo necesitarías Firebase?**
- Si quieres que los cambios del panel Admin se **guarden permanentemente** (ahora se borran al recargar)
- Si quieres que el **newsletter** guarde emails reales
- Si quieres que **varios admins** puedan editar la web al mismo tiempo

Si en el futuro quieres añadir Firebase, dímelo y te explico cómo conectarlo.

---

## ❓ Preguntas frecuentes

**¿Puedo tener un dominio propio como `rollerzone.es`?**
Sí. Una vez que tienes GitHub Pages funcionando, puedes comprar un dominio (en Namecheap, GoDaddy, etc.) y configurarlo en Settings → Pages → Custom domain.

**¿Los cambios en el admin se guardan?**
Actualmente no, porque no hay base de datos. Los datos vuelven al estado inicial al recargar la página. Para que sean permanentes necesitarías Firebase Firestore.

**¿GitHub Pages es gratis para siempre?**
Sí, es completamente gratis para repositorios públicos.
