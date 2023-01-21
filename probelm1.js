const data = { a: 1, b: 2, c: 3 }
const result = []
for (const key in data){
    result.push({[key]:data[key]})
}
console.log(result)