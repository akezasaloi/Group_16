data class Recipe(
    val title: String,
    val ingredients: List<String>,
    val steps: List<String>
)
val recipes = mutableListOf<Recipe>()
fun addRecipe(title: String, ingredients: List<String>, steps: List<String>) {
    recipes.add(Recipe(title, ingredients, steps))
}
fun searchRecipes(query: String): List<Recipe> {
    val words = query.lowercase().split("\\s+".toRegex())
    return recipes.filter { r ->
        words.all { w ->
            r.title.lowercase().contains(w) ||
            r.ingredients.any { it.lowercase().contains(w) }
        }
    }
}
fun main() {
    addRecipe("Pilau", listOf("Rice", "Beef", "Spices"), listOf("Brown beef", "Add rice"))
    addRecipe("Smoothie", listOf("Banana", "Milk"), listOf("Blend"))
    println(searchRecipes("beef")) 	
}
