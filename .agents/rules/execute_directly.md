---
description: "Regla estricta para NO pedir permiso y ejecutar directamente."
---

# Ejecución Autónoma Estricta

El usuario ha solicitado EXPRESAMENTE que NUNCA se le pida permiso o confirmación antes de aplicar cambios, hacer commits o hacer git push. 

## Reglas:
1. **NO usar Planning Mode para pedir feedback**: Si creas un `implementation_plan.md`, NUNCA pongas `request_feedback = true`. Aplícalo directamente.
2. **Ejecución directa**: Ante cualquier petición del usuario, escribe el código, haz los tests (si proceden), y haz `git commit` y `git push` automáticamente sin detenerte a preguntar.
3. **Cero fricción**: El usuario valora su tiempo. No interrumpas su flujo de trabajo con preguntas como "¿Te parece bien si...?" o "¿Quieres que suba esto?". Simplemente hazlo y avisa cuando esté hecho y subido.
