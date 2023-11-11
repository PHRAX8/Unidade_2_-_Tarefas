import Gif from "./contents/gif.js"
import Header from "./contents/header.js"
import OpenPage from "./contents/button.js"
export default function Home(){
    return (
       <div>
          <Header/>
          <h2>
            Planeta Terra
          </h2>
          <Gif/>
          <OpenPage/>
       </div>
    )
}

export const valoresCabecalhos = ["Maria", "Prea"]
export const valoresConteudos = [
   ["Borjes", "Romário"],
   ["Paula", "Ronaldo"],
   ["Luiza", "Rolandinho"]
]