import { Dataprops } from "../controllers/CreateNutritionController"
import { GoogleGenerativeAI } from "@google/generative-ai"

class CreateNutritionServices {
        async execute( {name, weight, height, age, gender, objective, level} : Dataprops){

            try {
                const genAI = new GoogleGenerativeAI(process.env.API_KEY!)
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})
                const response = await model.generateContent('escreva a seguinte frase: é de ladinho papai')

                

                console.log(JSON.stringify(response, null, 2));

                return { ok: true }

            } catch (err) {
                console.error("erro JSON: ", err)
                throw new Error("Failed create. ")
            }
            
        }

}

export{ CreateNutritionServices }