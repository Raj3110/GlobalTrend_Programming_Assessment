/*
8.Implement a simple HashMap class
 with put, get, and remove methods.
*/

class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        if (key in this.map) {
            delete this.map[key];
            return true;
        }
        return false;
    }
}


let hashMap = new HashMap();

hashMap.put("name", "Raj");
hashMap.put("age", 21);

console.log(hashMap.get("name"));
console.log(hashMap.get("age")); 

hashMap.remove("age");
console.log(hashMap.get("age")); 