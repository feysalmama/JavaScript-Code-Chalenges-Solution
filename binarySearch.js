function sortArray(arr){
	return arr.sort((a, b) => a - b);
}

function binarySearch(array,value) {

       sortedarray = sortArray(array);
       let left = 0;
       let right = sortedarray.length - 1 ;
       let middle = parseInt((left +right)/2);

	   while(sortedarray[middle] != value && left <= right) {
	   	 	
   	 		if (value > sortedarray[middle]) {
   	 			left = middle + 1;	
   	 		}else{
   	 			right = middle -1;
   	 		}
   	 	  middle = parseInt((left +right)/2) 	 	
	   }
		   return sortedarray[middle]==value ? middle : -1;

	 
}

console.log(binarySearch([2,4,5,6,7,22,11,3,4,1],2));