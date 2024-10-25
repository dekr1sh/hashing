import { LinkedList } from "./linked-list.js";

function HashMap(){
    const loadFactor = 0.75;
    let capacity = 16;
    let length = 0;          // No. of stored keys in hashMap
    let hashMap = Array.from({ length: capacity }, () => LinkedList());

    function getCapacity(){
        return capacity;
    }

    function getLength() {
        return length;
    }

    function hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }

    function grow() {
        capacity *= 2;
        const newHashMap = Array.from({ length: capacity }, () => LinkedList());

        for (const bucket of hashMap) {
            let pointer = bucket.getHead();
            while (pointer) {
                const { key, value } = pointer.value;
                const hashedKey = hash(key);
                newHashMap[hashedKey].append({ key, value });
                pointer = pointer.next;
            }
        }

        hashMap = newHashMap;
    }

    function set(key, value){
        const hashedKey = hash(key);
        const bucket = hashMap[hashedKey];

        let pointer = bucket.getHead();
        while (pointer) {
            if (pointer.value.key === key) {
                pointer.value.value = value;    
                return;
            }
            pointer = pointer.next;
        }

        bucket.append({ key, value });
        length++;

        if (length / capacity > loadFactor) {
            grow();
        }
    }

    function get(key) {
        const hashedKey = hash(key);
        const bucket = hashMap[hashedKey];

        let pointer = bucket.getHead();
        while (pointer) {
            if (pointer.value.key === key) {
                return pointer.value.value;
            }
            pointer = pointer.next;
        }
        return null;
    }

    function has(key) {
        return get(key) !== null;
    }

    function remove(key) {
        const hashedKey = hash(key);
        const bucket = hashMap[hashedKey];

        let pointer = bucket.getHead();
        let index = 0;
        while (pointer) {
            if (pointer.value.key === key) {
                bucket.remove(index);
                length--;
                return true;
            }
            pointer = pointer.next;
            index++;
        }
        return false;
    }

    function clear() {
        hashMap = Array.from({ length: capacity }, () => LinkedList());
        length = 0;
    }

    function keys() {
        const keysArray = [];
        for (const bucket of hashMap) {
            let pointer = bucket.getHead();
            while (pointer) {
                keysArray.push(pointer.value.key);
                pointer = pointer.next;
            }
        }
        return keysArray;
    }

    function values() {
        const valuesArray = [];
        for (const bucket of hashMap) {
            let pointer = bucket.getHead();
            while (pointer) {
                valuesArray.push(pointer.value.value);
                pointer = pointer.next;
            }
        }
        return valuesArray;
    }

    function entries() {
        const entriesArray = [];
        for (const bucket of hashMap) {
            let pointer = bucket.getHead();
            while (pointer) {
                entriesArray.push([pointer.value.key, pointer.value.value]);
                pointer = pointer.next;
            }
        }
        return entriesArray;
    }

    return { set, get, has, remove, clear, keys, values, entries, getLength, getCapacity };
}

export {HashMap};