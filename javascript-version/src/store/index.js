import { defineStore } from 'pinia';

export const useWordStore = defineStore('word', {
  state: () => ({
    word: [], // Aquí está el array de objetos con campos `Quechua`, `Español`, `English`
  }),
  actions: {
    addnewdata(name) {
      this.word.push(name);
    },
    buscarPalabra(query) {
      const foundWord = this.word.find(item => item.Quechua.toLowerCase() === query.toLowerCase());
      if (foundWord) {
        return {
          quechua: foundWord.Quechua,
          espanol: foundWord.Español,
          ingles: foundWord.English
        };
      }
      return null;
    }
  },
  getters: {
    allQuechuaWords: (state) => {
      const quechuaWords = state.word
        .filter(item => item.Quechua) // Filtrar solo los que tienen `Quechua` definido
        .map(item => item.Quechua);   // Mapear para obtener solo el valor `Quechua`
      
      console.log('allQuechuaWords:', quechuaWords); // Añadimos un log para verificar los datos
      return quechuaWords;
    }
  }
});

export default useWordStore;
