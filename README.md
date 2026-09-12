# Owllow — App de Gestión de Finanzas Personales

Aplicación propia para llevar el control de gastos, ingresos, presupuestos, deudas
y metas de ahorro. Monorepo con backend (Express + Drizzle + Neon) y app móvil
(Expo / React Native). Todo en español, moneda default COP.

> ⚠️ **Software propietario.** Copyright © 2026 Mauricio Jesus Iturriza Medina.
> Todos los derechos reservados. Este repositorio se entrega con fines de
> evaluación académica únicamente. Consulta [`LICENSE`](./LICENSE) antes de
> usar, copiar o distribuir cualquier parte del código.

## Requisitos
- Node 20+
- **pnpm** (`npm i -g pnpm`)
- Una base de datos PostgreSQL en Neon. Pon la connection string en `.env` (raíz):
  ```
  DATABASE_URL=postgres://...neon.tech/neondb?sslmode=require
  ```
- `JWT_SECRET` de al menos 32 caracteres en `.env`. Opcional: `ALERT_WEBHOOK_URL` para alertas operativas.
  `GMAIL_USER`/`GMAIL_APP_PASSWORD` no se requieren mientras recuperación de contraseña esté deshabilitada.

## Backend
```bash
cd server
pnpm install
pnpm db:generate   # solo después de cambiar el schema
pnpm db:migrate    # aplica migraciones versionadas en Neon
pnpm db:seed       # solo para bootstrap/admin; no lo corras como parte normal del deploy
pnpm dev           # API en http://localhost:3000
```

## Mobile
```bash
cd mobile
pnpm install
pnpm start         # abre Expo
```
Antes de probar en un dispositivo, edita `API_BASE_URL` en `mobile/src/api/client.ts`
con la IP de tu PC en la LAN (no uses `localhost`), o exporta `EXPO_PUBLIC_API_URL`.

### Compilar APK
```bash
cd mobile
pnpm build:apk     # eas build -p android --profile preview
```
(Requiere `eas login` y `eas init` para configurar `projectId` en `app.json`.)

## Verificación
```bash
cd server && pnpm typecheck && pnpm test
cd mobile && pnpm typecheck
```

CI corre estos checks en GitHub Actions para PRs y pushes a `main`.

## Autoría y licencia

Autor: **Mauricio Jesus Iturriza Medina**.

Owllow es una aplicación desarrollada de forma independiente por su autor, con
recursos propios y fuera del marco de cualquier relación laboral o académica. Su
presentación como trabajo de asignatura no cede derechos sobre el código a
ninguna institución ni a terceros.

El uso está limitado a lo descrito en [`LICENSE`](./LICENSE): acceso, ejecución y
revisión con fines exclusivos de evaluación académica. Queda prohibido el uso
comercial, la redistribución, la publicación y la creación de obras derivadas sin
autorización previa y por escrito del autor.

Ver también [`TERMS.md`](./TERMS.md) y [`PRIVACY.md`](./PRIVACY.md).
