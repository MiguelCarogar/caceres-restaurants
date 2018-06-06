const inputJsonTransformer = {}

// This method transform the csv response in a proper way
inputJsonTransformer.transform = (input) => {
  let transformedJson = []
  input.forEach((restaurant) => {
    let transformedRestaurant = {
      name: restaurant[8],
      city: restaurant[12],
      address: restaurant[13],
      postalCode: restaurant[10],
      webSite: restaurant[1],
      mail: restaurant[2],
      capacity: restaurant[6]
    }
    transformedJson.push(transformedRestaurant)
  })
  return transformedJson
}

export default inputJsonTransformer
