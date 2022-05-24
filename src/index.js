// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//

window.$fxhashFeatures = {
  //
  // This is where it read our properties from sketch.js
  //
}

// this code writes the values to the DOM as an example
const container = document.createElement("div")
// container.innerText = `
//   random hash: ${fxhash}\n
// `
// document.body.prepend(container)