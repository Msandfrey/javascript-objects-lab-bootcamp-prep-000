var recipes = {}
function updateObjectWithKeyAndValue(obj, key, val){
  console.log(key)
  return Object.assign({}, obj, {key: val})
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj[key] = val
  return obj
}
function deleteFromObjectByKey(obj, key){
  var object = obj
  delete object[key]
  return object
}
