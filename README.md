# ensayo-react24

[![🕵 Running Unit Tests](https://github.com/Jemos-Labs/ensayo-react24/actions/workflows/repo-creator.yml/badge.svg)](https://github.com/Jemos-Labs/ensayo-react24/actions/workflows/repo-creator.yml)

# Firebase Terra - Laboratorio de Firebase + React

## Objetivo

Este proyecto fue creado para aprender los servicios principales de Firebase utilizando React.

El propósito no es construir una aplicación de producción, sino comprender cómo se integran:

* Firebase Hosting
* Firebase Authentication
* Cloud Firestore
* Firestore Security Rules

---

# Arquitectura

Usuario
↓
React (Frontend)
↓
Firebase Authentication
↓
Cloud Firestore
↓
Firebase Hosting

---

# Tecnologías

* React
* Vite
* Firebase SDK
* Firebase Hosting
* Firebase Authentication
* Cloud Firestore

---

# Funcionalidades implementadas

## 1. Hosting

La aplicación puede desplegarse en Firebase Hosting.

Objetivo:

Publicar una aplicación React sin administrar servidores.

Flujo:

Usuario
↓
Firebase Hosting
↓
Aplicación React

---

## 2. Login con Google

Proveedor utilizado:

Google Authentication

Método:

signInWithPopup()

Ejemplo:

```javascript
const provider = new GoogleAuthProvider();

const result = await signInWithPopup(
  auth,
  provider
);
```

Resultado:

* El usuario inicia sesión con Google.
* Firebase genera una identidad única.
* Se obtiene información básica del usuario.

---

## 3. Persistencia de sesión

Implementado mediante:

```javascript
onAuthStateChanged()
```

Ejemplo:

```javascript
useEffect(() => {
  const unsubscribe =
    onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

  return () => unsubscribe();
}, []);
```

Objetivo:

Mantener la sesión activa incluso después de:

* Refrescar la página
* Cerrar y abrir la pestaña

---

## 4. Logout

Implementado mediante:

```javascript
signOut(auth)
```

Ejemplo:

```javascript
await signOut(auth);
setUser(null);
```

Objetivo:

Cerrar la sesión actual del usuario.

---

## 5. Firestore

Base de datos NoSQL utilizada para almacenar información de usuarios.

Colección:

users

Documento:

users/{uid}

Ejemplo:

```text
users
 └── abc123
      ├── uid
      ├── name
      ├── email
      └── photoURL
```

---

## 6. Escritura de documentos

Implementado mediante:

```javascript
setDoc()
```

Ejemplo:

```javascript
await setDoc(
  doc(db, "users", user.uid),
  {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  }
);
```

Objetivo:

Crear o actualizar el documento del usuario autenticado.

---

## 7. Firestore Security Rules

Regla recomendada:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{userId} {

      allow read, write:
        if request.auth != null
        && request.auth.uid == userId;

    }
  }
}
```

Objetivo:

Cada usuario solo puede acceder a su propio documento.

---

# Conceptos aprendidos

## Authentication

Responde:

¿Quién eres?

Ejemplo:

```text
Usuario autenticado
↓
UID
↓
abc123
```

---

## Authorization

Responde:

¿Qué puedes hacer?

Ejemplo:

```text
UID autenticado
↓
Firestore Rules
↓
Permitir o denegar acceso
```

---

## UID

Cada usuario autenticado posee un identificador único.

Ejemplo:

```text
abc123xyz789
```

Este UID se utiliza como clave principal dentro de Firestore.

---

# Flujo completo

Usuario
↓
Login Google
↓
Firebase Authentication
↓
Obtención UID
↓
Firestore Rules
↓
Cloud Firestore
↓
Creación de documento users/{uid}

---

# Comandos útiles

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

Desplegar Hosting:

```bash
firebase deploy --only hosting
```

Desplegar Firestore Rules:

```bash
firebase deploy --only firestore:rules
```

---

# Próximos laboratorios

## Firebase Storage

Subida de:

* imágenes
* PDFs
* documentos

Asociados al usuario autenticado.

---

## Cloud Functions

Automatizar procesos cuando:

* un archivo se sube
* un usuario se registra
* un documento cambia

---

## Terraform

Gestionar infraestructura Firebase y GCP mediante código.

---

## GitHub Actions

Automatizar:

* lint
* build
* deploy

---

# Relación con DevOps

Este laboratorio permite practicar:

* Gestión de identidades
* Seguridad basada en reglas
* Servicios administrados
* Infraestructura como código
* Automatización de despliegues

---

# Lección principal

Firebase Authentication identifica usuarios.

Firestore Security Rules controla permisos.

Cloud Firestore almacena datos.

Firebase Hosting publica la aplicación.

Juntos forman una arquitectura serverless moderna para aplicaciones web y móviles.


## Recursos

- [Stack Frontend]
- [Documentación JSDoc]
- [Manejo de ramas git]
