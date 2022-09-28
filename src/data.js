import banner1 from './assets/images/banner.png';

const data = {
    image: banner1,
    title: "French Cookies",
    text: "Efficient aggregate maximize clicks-and-mortar infrastructures communities weblogs best-of-breed blogospheres frictionless interfaces B2C.",
    overview: {
        subTitle: "Overview",
        difficulty: {
            title: "Difficulty", 
            value: 2.5
        },
        cost:{
            title: "Cost",
            value: "",
            unit: "€€"
        },
        prepTime:{
            title: "Preparation Time",
            value: 45,
            unit: "mn"
        },
        cookTime:{
            title: "Cooking Time",
            value: 0,
            unit: "mn"
        }

    },
    ingredients:{
        subTitle: "Ingredients",
        servings: "Servings:",
        tableTitles: [ "#", "Name", "Quantiy", "Metric"],
        text: "List of the recipe ingredients",
        ingredients: [
            {
                number: 1,
                name: "Tomato",
                quantiy: 0.5,
                metric: "Piece"
            },
            {
                number: 2,
                name: "Chocolate",
                quantiy: 100,
                metric: "Gram"
            },
            {
                number: 3,
                name: "Flour",
                quantiy: 50,
                metric: "Gram"
            },
            {
                number: 4,
                name: "Milk",
                quantiy: 5,
                metric: "Cl"
            },
        ]
    }

}

export {data};