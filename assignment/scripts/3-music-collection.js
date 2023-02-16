console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array.
let collection = [];

// Add a function named addToCollection. This function should:
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Add the new object to the end of the collection array
// Return the newly created object

function addToCollection( title, artist, yearPublished ){ // created addToCollection function with parameters 
    let album = { title: title, artist: artist, yearPublished: yearPublished } // create object album with the properties as parameters
    collection.push(album) // add object album to collection array
    return album; // return object album
} // end addToCollection

addToCollection('Be', 'BTS', '2020'); // input for parameters
console.log('Collection:', collection); // testing collection array to see the album
