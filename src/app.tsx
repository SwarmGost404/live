import PolaroidCard from "./component/ui/PalaroidCard"

import { data } from "./controller/palaroid"

// Основной компонент, который просто проходится циклом по данным, которые находятся по пути ./controller/palaroid и создаёт полароидные карточки


export function App() {
  
  return (
    <>
      <main>
        <div style={{display: "flex", flexWrap: "wrap", margin: "auto", justifyContent: "center"}}>
          {
            data.map((item, index) => {
              return(
                <PolaroidCard key={index} URL={item.imageUrl} text={item.text} date={item.date} />
              )
            })
          }
        </div>
        
      </main>
    </>
  )
}
