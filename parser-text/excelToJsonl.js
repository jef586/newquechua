import fs from 'fs';
import xlsx from 'xlsx';

function excelAJsonl(archivoExcel, archivoJsonl) {
  // Leer el libro de trabajo
  const libro = xlsx.readFile(archivoExcel);
  // Convertir la primera hoja del libro de trabajo a JSON
  const hoja = libro.Sheets[libro.SheetNames[0]];
  const datos = xlsx.utils.sheet_to_json(hoja);

  // Crear un stream de escritura para el archivo JSONL
  const stream = fs.createWriteStream(archivoJsonl, { flags: 'w' });

  // Escribir cada objeto JSON como una línea en el archivo JSONL
  datos.forEach(objeto => {
    // Eliminar los caracteres '\r' de cada valor del objeto
    // y cambiar la clave 'prompt' por 'input_text'
    const objetoModificado = {};
    for (const [key, value] of Object.entries(objeto)) {
      let newKey = key;
      let newValue = value;

      // Cambiar la clave 'prompt' por 'input_text'
      if (key === 'prompt') {
        newKey = 'input_text';
      }
      
      // Si el valor es una cadena, eliminar los caracteres '\r'
      if (typeof newValue === 'string') {
        newValue = newValue.replace(/\r/g, '');
      }
      
      objetoModificado[newKey] = newValue;
    }

    stream.write(JSON.stringify(objetoModificado) + '\n');
  });

  stream.end();
}

// Llamar a la función con los nombres de archivo apropiados
excelAJsonl('mateo7.xlsx', 'mateo7_2.jsonl');
