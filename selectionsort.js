
function selectionSort(array) {
	
	
	noSwap= true;
	for (let i=0; i < array.length; i++) {
		let minimum = array[i];
		for(let j=i; j< array.length; j++ ){
			if(array[j] < minimum){
				[array[j],minimum]=[minimum,array[j]]
			}
		}
	}

	return array;

}
console.log(selectionSort([2,4,1,6,7,0,66]));







