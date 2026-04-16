📊 E-commerce Data Pipeline (Learning Project)

Este proyecto es parte de mi proceso de aprendizaje en el área de Data Engineering y Backend.
El objetivo fue construir un flujo completo de datos: desde la ingestión hasta la visualización.

⸻

🚀 Objetivo

Trabajar con un dataset real de e-commerce para:
	•	Procesar grandes volúmenes de datos con Python
	•	Limpiar y transformar información
	•	Diseñar un modelo relacional
	•	Crear consultas analíticas
	•	Exponer los datos mediante un backend
	•	Visualizarlos en un frontend simple

⸻

🧠 Arquitectura utilizada

Se implementó una arquitectura tipo Medallion:
	•	Raw → Datos originales cargados desde CSV
	•	Silver → Datos limpios y transformados
	•	Gold → Datos agregados listos para análisis

⸻

🛠️ Tecnologías utilizadas
	•	Python (Pandas) → procesamiento de datos
	•	PostgreSQL → base de datos
	•	SQLAlchemy → conexión y carga de datos
	•	NestJS → backend
	•	Frontend básico → visualización de datos

⸻

📥 Proceso del pipeline

1. Ingesta
	•	Lectura del archivo CSV por chunks
	•	Carga inicial a tabla raw

2. Limpieza y transformación
	•	Conversión de tipos de datos (fechas, números)
	•	Eliminación de valores nulos relevantes
	•	Identificación de devoluciones (facturas con prefijo C)
	•	Separación entre ventas y devoluciones

3. Modelado de datos

Se crearon las siguientes tablas:
	•	country
	•	customers
	•	products
	•	transactions
	•	transactions_details

Relaciones:
	•	Un cliente → muchas transacciones
	•	Una transacción → muchos detalles
	•	Un producto → aparece en muchos detalles

⸻

📊 Capa Gold (análisis)

Se generaron consultas como:
	•	Ventas totales por día
	•	Productos más vendidos
	•	Clientes con mayor gasto
	•	Conteos generales (clientes, productos, transacciones)

⸻

🌐 Backend

Se implementó un backend con NestJS para:
	•	Exponer endpoints de datos analíticos
	•	Servir información al frontend

⸻

🖥️ Frontend

Se creó una interfaz básica para visualizar:
	•	Métricas principales
	•	Resultados de consultas

Nota: El frontend es simple, ya que el enfoque principal del proyecto fue el procesamiento y modelado de datos.

⸻

📌 Aprendizajes

Durante este proyecto aprendí:
	•	Manejo de datos grandes con Pandas (chunksize)
	•	Importancia de los tipos de datos en bases de datos
	•	Modelado relacional (normalización)
	•	Manejo de casos reales como devoluciones
	•	Separación de datos en capas (raw, silver, gold)

⸻

⚠️ Áreas de mejora
	•	Mejorar validaciones de datos
	•	Optimizar consultas SQL
	•	Mejorar el frontend
	•	Automatizar el pipeline (ej. Airflow o scripts programados)

⸻

📈 Estado del proyecto

✔️ Funcional
🛠️ En mejora continua como parte de mi aprendizaje

⸻

🙋‍♂️ Sobre mí

Soy desarrollador en formación enfocado en:
	•	Backend (Node.js / NestJS)
	•	Data Engineering
	•	Bases de datos

Este proyecto forma parte de mi práctica para mejorar mis habilidades en el manejo de datos y construcción de sistemas completos.
