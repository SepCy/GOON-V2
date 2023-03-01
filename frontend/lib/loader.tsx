

export const customLoader = ({ src, width, quality }:any)=>{
    return `http://localhost:9080/wp-content/uploads/${src}?w=${width}&q=${quality || 75}`
  }
  