import {valoresCabecalhos} from "./index.js"
import {valoresConteudos} from "./index.js"

export default function Principal(){
    return (
       <div>
          <h1>Nova Página</h1>
          <MariaPrea titulo="MariaPrea" cabecalhos={valoresCabecalhos} conteudos={valoresConteudos}/>
       </div>
    )
}

export function MariaPrea({ titulo, cabecalhos, conteudos }){
    return (
        <div>
            <h1>{titulo}</h1>
            <table id="tabela" border="1">
                <thead>
                <tr>
                    {cabecalhos.map((cabecalho, index) => (
                        <th key={index}>{cabecalho}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {conteudos.map((linha, rowIndex) => (
                    <tr key={rowIndex}>
                        {linha.map((conteudo, cellIndex) => (
                            <td key={cellIndex}>{conteudo}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}