function compareArrays(arr1, arr2) {
    return arr1.every((el, i) => el === arr2[i] && arr1.length === arr2.length)
}

function getUsersNamesInAgeRange(users, gender) {
  if ((gender === "мужской" || gender === "женский") && users.length > 0) {
    return users
    .filter(el => el.gender === gender)
    .map(el => el.age)
    .reduce((acc, el, i, arr) => acc + el / arr.length, 0)
  }
  
  return 0
}