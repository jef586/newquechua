import fs from 'fs';
import xlsx from 'xlsx';

function textosABibliaExcel(nombreArchivoEspañol, nombreArchivoQuechua, nombreArchivoExcel) {
  // Leer el contenido de ambos archivos y reemplazar los saltos de línea que no están seguidos por un número
  const contenidoEspañol = fs.readFileSync(nombreArchivoEspañol, 'utf8').replace(/(\n)(?!\d+)/g, ' ');
  const contenidoQuechua = fs.readFileSync(nombreArchivoQuechua, 'utf8').replace(/(\n)(?!\d+)/g, ' ');

  // Dividir los textos en versículos
  // Esta expresión busca los números de versículos seguidos de espacio y captura el texto hasta el próximo número de versículo o final de archivo
  const versiculosEspañol = contenidoEspañol.split(/\d+\s(?=\D)/).filter(line => line.trim() !== '');
  const versiculosQuechua = contenidoQuechua.split(/\d+\s(?=\D)/).filter(line => line.trim() !== '');

  // Verificar que ambos archivos tengan el mismo número de versículos
  if (versiculosEspañol.length !== versiculosQuechua.length) {
    throw new Error('Los archivos no tienen el mismo número de versículos.');
  }

  // Limpiar cada versículo para eliminar números al inicio y espacios extra
  const limpiarVersiculo = (versiculo) => versiculo.replace(/^\d+\s+/, '').trim();

  const datosParaExcel = versiculosEspañol.map((versiculo, index) => ({
    "prompt": limpiarVersiculo(versiculo),
    "completion": limpiarVersiculo(versiculosQuechua[index]),
  }));

  // Crear un libro de trabajo y una hoja
  const libro = xlsx.utils.book_new();
  const hoja = xlsx.utils.json_to_sheet(datosParaExcel);
  
  xlsx.utils.book_append_sheet(libro, hoja, "Versículos");
  xlsx.writeFile(libro, nombreArchivoExcel);
}

// Asegúrate de proporcionar las rutas de archivo correctas aquí
textosABibliaExcel('./expanol.txt', './quechua.txt', 'mateo11.xlsx');
