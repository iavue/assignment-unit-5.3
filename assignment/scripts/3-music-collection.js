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

console.log( addToCollection('Be', 'BTS', 2020) );

// Test the addToCollection function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.

console.log( addToCollection('Proof', 'BTS', 2022) ); // added albums
console.log( addToCollection('Jack in the Box', 'J-Hope', 2022) );
console.log( addToCollection('Indigo', 'RM', 2022) );
console.log( addToCollection('Fearless', 'Taylor Swift', 2008) );
console.log( addToCollection('thank u, next', 'Ariana Grande', 2019) );
console.log( addToCollection('Justice', 'Justin Bieber', 2021) );

console.log('Collection:', collection); // console.log collection array to see the album

// Add a function named showCollection. This function should:
//      Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//      Console.log the number of items in the array.
//      Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

function showCollection( anArray ){ // created showCollection function with a parameter as anArray because we want an array there 
    console.log('Length:', anArray.length); // console.log the number of items in the array.
    for (let i=0; i<anArray.length; i++){ // created a 'for' loop to console.log each album with the formatted information
        let album = anArray[i];
        console.log(anArray[i].title, 'by', anArray[i].artist, ',', 'published in', anArray[i].yearPublished);
    }
} // end showCollection

// Test the showCollection function.
showCollection( collection ); // testing with the collection array created above

const secondCollection = [  // creating a new collection here to test the showCollection function with a different collection
    {title: 'Map of the Soul: 7', artist: 'BTS', yearPublished: 2020},
    {title: '30', artist: 'Adele', yearPublished: 2021},
    {title: 'Traumatize', artist: 'Megan Thee Stallion', yearPublished: 2022} 
] // end secondCollection

showCollection( secondCollection ); // testing with the second collection

// Add a function named findByArtist. This function should:
//      Take in artist (a string) parameter
//      Create an array to hold any results, empty to start
//      Loop through the collection and add any objects with a matching artist to the array.
//      Return the array with the matching results. If no results are found, return an empty array.

function findByArtist( artist ){ // created findByArtist with string parameter set as artist
    const results = []; // created a results array that is empty
    for (let i=0; i<collection.length; i++){ // created 'for' loop
        if (collection[i].artist === artist){ // check all artists in the indexes of the collection array to see if there's an artist that matches the artist input
            results.push(collection[i]) // add all objects matching the artist by checking indexes in the collection
        }
    } 
    return results; // return array with objects from the matching artist
} // end findByArtist

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log(findByArtist('BTS')); // tested with BTS, which has 2 albums in the collection
console.log(findByArtist('Selena')); // tested with an artist that is not in the collection