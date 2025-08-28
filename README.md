# Simuladores FIBI

Colección de simuladores educativos creados con inteligencia artificial para el aprendizaje de conceptos biomédicos y fisiológicos.

## 🚀 Características

- **Interfaz moderna y responsiva** construida con Next.js y Tailwind CSS
- **Lista dinámica de simuladores** que se actualiza automáticamente
- **Filtrado por categorías** para facilitar la navegación
- **Diseño optimizado para móviles** y dispositivos de escritorio
- **Fácil mantenimiento** - solo necesitas agregar nuevos simuladores al archivo de configuración

## 📋 Simuladores Incluidos

- **ECG** - Calculadora de frecuencia cardíaca y análisis de ondas ECG
- **ECG - Competencia** - Simulador avanzado para competencias y evaluaciones
- **Dipolo** - Visualización de campos eléctricos de dipolos
- **Automatismo** - Estudio de automatismos cardíacos
- **Ecuación de Goldman-Hodgkin-Katz** - Calculadora del potencial de membrana
- **Ecuación de Nernst** - Calculadora del potencial de equilibrio
- **Potencial de Acción - Todo o Nada** - Simulación del potencial de acción

## 🛠️ Instalación Local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/simuladores-fibi.git
   cd simuladores-fibi
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en:**
   ```
   http://localhost:3000
   ```

## 🚀 Despliegue en Vercel

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Crea un repositorio en GitHub y conecta tu local
   git remote add origin https://github.com/TU_USUARIO/simuladores-fibi.git
   git push -u origin main
   ```

2. **Despliega en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa tu repositorio
   - ¡Listo! Vercel detectará automáticamente que es Next.js

## 📁 Estructura del Proyecto

```
simuladores/
├── app/                    # Páginas de Next.js
├── components/            # Componentes React
├── data/                  # Lista de simuladores
├── public/simuladores/    # Archivos HTML de simuladores
└── fibi/                  # Simuladores originales (backup)
```

## ➕ Agregar Nuevos Simuladores

1. **Copia el archivo HTML** a `public/simuladores/`
2. **Actualiza `data/simuladores.ts`** con la información del nuevo simulador
3. **¡Listo!** Aparecerá automáticamente en la página

## 🎨 Personalización

### Cambiar el Logo
- Reemplaza `public/logo_sin_fondo.png` con tu logo
- Ajusta el tamaño en `components/Footer.tsx` si es necesario

### Modificar Colores
- Edita las clases de Tailwind CSS en `app/page.tsx`
- Modifica los gradientes y colores según tu marca

### Agregar Categorías
- Las categorías se generan automáticamente desde `data/simuladores.ts`
- No necesitas modificar código adicional

## 📱 Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **React** - Biblioteca de UI

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Creado por **Lab_ai** - [Tu enlace aquí]

---

¡Esperamos que estos simuladores sean útiles para el aprendizaje de tus estudiantes! 🎓
