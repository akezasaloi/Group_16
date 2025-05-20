class Recipe {
    constructor(title, ingredients = [], steps = []) {
      this.title = title;
      this.ingredients = ingredients;
      this.steps = steps;
    }
  }
  
  class RecipeBook {
    constructor() {
      this.recipes = [];           
    }
    
    addRecipe(title, ingredients, steps) {
      const recipe = new Recipe(title, ingredients, steps);
      this.recipes.push(recipe);
      return recipe;               	
    }
    
    search(inquiry) {
      const words = inquiry.toLowerCase().split(/\s+/);
      return this.recipes.filter(recipe =>
        words.every(w =>
          recipe.title.toLowerCase().includes(w) ||
          recipe.ingredients.some(ing => ing.toLowerCase().includes(w))
        )
      );
    }
  }
  
  const book = new RecipeBook();
  book.addRecipe(
    "Ugali",
    ["Maize Flour", "Water"],
    ["Boil water", "Add flour while stirring", "Cook until firm"]
  );
  book.addRecipe(
    "Avocado Salad",
    ["Avocado", "Tomato", "Salt"],
    ["Cut avocado", "Dice tomato", "Combine & season"]
  );
  console.log("Search for 'water':");
  console.log(book.search("water")); 	
  console.log("\nSearch for 'avocado':");
  console.log(book.search("avocado"));   
  