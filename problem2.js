const data = [{"a":1},{"b":2},{c:3}]
const result = {}
for (const item of data){
    Object.assign(result,item)
}
console.log(result)