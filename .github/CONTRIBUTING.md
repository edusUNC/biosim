# Contribuyendo a Simuladores FIBI

¡Gracias por tu interés en contribuir a este proyecto! Este documento te guiará a través del proceso de contribución.

## 🚀 Cómo Contribuir

### Reportar Bugs

1. **Busca si ya existe un issue** relacionado con tu problema
2. **Crea un nuevo issue** usando la plantilla de bug report
3. **Proporciona información detallada** sobre el problema

### Solicitar Nuevas Funciones

1. **Busca si ya existe una solicitud** similar
2. **Crea un nuevo issue** usando la plantilla de feature request
3. **Describe claramente** la funcionalidad que te gustaría ver

### Contribuir Código

1. **Fork el repositorio**
2. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Haz tus cambios** y commitéalos:
   ```bash
   git add .
   git commit -m "feat: agregar nueva funcionalidad"
   ```
4. **Push a tu fork**:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Crea un Pull Request**

## 📋 Agregar Nuevos Simuladores

Para agregar un nuevo simulador:

1. **Copia el archivo HTML** a `public/simuladores/`
2. **Actualiza `data/simuladores.ts`**:
   ```typescript
   {
     id: 'nuevo-simulador',
     nombre: 'Nombre del Simulador',
     descripcion: 'Descripción del simulador',
     categoria: 'Categoría',
     archivo: 'nuevo-simulador.html'
   }
   ```
3. **Prueba localmente**:
   ```bash
   npm run dev
   ```
4. **Crea un Pull Request** con tus cambios

## 🧪 Pruebas

Antes de enviar tu Pull Request:

1. **Ejecuta las pruebas locales**:
   ```bash
   npm run build
   npm run dev
   ```
2. **Verifica que todo funcione** en el navegador
3. **Prueba en diferentes dispositivos** si es posible

## 📝 Convenciones de Código

### Commits

Usa el formato de commits convencionales:
- `feat:` para nuevas características
- `fix:` para correcciones de bugs
- `docs:` para cambios en documentación
- `style:` para cambios de formato
- `refactor:` para refactorización de código
- `test:` para agregar o modificar pruebas

### Código

- **TypeScript**: Usa tipos explícitos cuando sea posible
- **React**: Usa hooks funcionales y componentes funcionales
- **CSS**: Usa Tailwind CSS para estilos
- **Nombres**: Usa nombres descriptivos en inglés

## 🤝 Proceso de Revisión

1. **Tu Pull Request será revisado** por los mantenedores
2. **Pueden solicitar cambios** si es necesario
3. **Una vez aprobado**, será mergeado al repositorio principal

## 📞 Contacto

Si tienes preguntas sobre cómo contribuir:
- Abre un issue en GitHub
- Contacta a los mantenedores del proyecto

¡Gracias por contribuir a hacer este proyecto mejor! 🎓
