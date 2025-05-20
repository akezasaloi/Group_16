
recipes = []    
def add_recipe(title, ingredients, steps):
    recipes.append({
        "title": title,
        "ingredients": ingredients,
        "steps": steps
    })
def search_recipes(query):
    words = query.lower().split()
    result = []
    for m in recipes:
        title = m["title"].lower()
        ing  = [i.lower() for i in m["ingredients"]]
        if all(any(a in field for field in [title, *ing]) for a in words):
            result.append(m)
    return result

add_recipe("Chapati", ["Flour", "Water", "Oil"], ["Mix", "Roll", "Fry"])
add_recipe("Fruit Salad", ["Mango", "Banana"], ["Chop", "Serve"])
print(search_recipes("flour")) 
print(search_recipes("mango"))
