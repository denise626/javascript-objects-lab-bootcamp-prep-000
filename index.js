var recipes = {};

var object = {
  prop: 1,
  prop2: 2
};

function updateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value});
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}


var newObject = deleteFromObjectByKey(object, )

function deleteFromObjectByKey(object, key) {
  
}
 
 
 
 
 