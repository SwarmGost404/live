import PolaroidCard from "./component/ui/PalaroidCard"

import { data } from "./controller/palaroid"


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
