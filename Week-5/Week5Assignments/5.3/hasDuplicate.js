function hasDuplicate (Darr){
    const set = new Set(Darr);
    if (set.size !== Darr.length){
        return false;
    }
      return true;
}
result = hasDuplicate([1,1,5,2,6,5,2,8,9]);//true
console.log(result);

result = hasDuplicate([1,5,2,6,8,9]);//false
console.log(result);
