const state = ["oromia","amhara","benishangulgumuz","tigray","sumale","afar","SNN","harari"]
function linearSearch(arr,search) {
	// body...
	for (let i =0; i< arr.length ; i++) {
		if(search == arr[i]){
			return i;
		}
	}

	return -1;
}

console.log(linearSearch(state,"tigrady"));