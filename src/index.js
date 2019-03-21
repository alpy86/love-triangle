/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 	let count = 0;  
  	for (let i = 0; i < preferences.length; i++) {
    	let firstValue = preferences[i];
     	let secondValue = preferences[firstValue - 1];
   		let thirdValue = preferences[secondValue - 1];
        if (thirdValue == i + 1) {
        	count++;
        }
    }

   return Math.floor(count / 3); 
}
