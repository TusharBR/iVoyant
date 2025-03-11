export const createUniqueRandomGenerator = (min: number, max: number) => {
    if (min > max) throw new Error("Min must be less than max!");
  
    const availableNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    
    return () => {
      if (availableNumbers.length === 0) return null; // No more unique numbers left
      
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      return availableNumbers.splice(randomIndex, 1)[0]; // Remove and return the number
    };
  };
  