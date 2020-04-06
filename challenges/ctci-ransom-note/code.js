function checkMagazine(magazine, note) {
  const isThereAllTheWords = note.every((noteWord) => {
      const isThereThisWord = magazine.some((magazineWord, index) => {
          if (noteWord === magazineWord) {
              magazine.splice(index, 1);
              return true;
          }
          return false;
      })
      return isThereThisWord;
  })
  console.log(isThereAllTheWords ? 'Yes' : 'No');
  return isThereAllTheWords;
}