function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return Array.from(set).join('');
}

function strToArr(str) {
    return str.split('');
}

function strToSet(str) {
    return new Set(str.split(''));
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return Object.fromEntries(arr.entries());
}

function strToObj(str) {
    return Object.fromEntries(str.split('').entries());
}

function superTypeOf(value) {
    if (value === null) return 'null';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (Array.isArray(value)) return 'Array';
    const type = typeof value;
    return type === 'undefined' ? 'undefined' : (type.charAt(0).toUpperCase() + type.slice(1));
}