const inputJsonTransformer = {}

// This method transform the csv response in a proper way
inputJsonTransformer.transform = (input) => {
  let transformedJson = []
  input.forEach((restaurant) => {
    let transformedRestaurant = {
      name: restaurant[8]
    }
    transformedJson.push(transformedRestaurant)
  })
  return transformedJson
}

export default inputJsonTransformer
