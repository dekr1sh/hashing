function Node(value = null, next = null){
    return {value, next};
}

function LinkedList(){
    let head = null;
    let size = 0;

    function getHead(){
        return head;
    }

    function getSize(){
        return size;
    }

    function append(value){
        const newNode = Node(value);
        if(head === null){
            head = newNode;
        }
        else{
            let pointer = head;
            while(pointer.next !== null){
                pointer = pointer.next;
            }
            pointer.next = newNode;
        }
        size++;
    }

    function remove(index){
        if(index < 0 || index >= size){
            return;
        }
        else if(index === 0){
            head = head.next;
        }
        else{
            let pointer = head;
            let prevPtr = null;
            let num = 0;
            while(num !== index){
                prevPtr = pointer;
                pointer = pointer.next;
                num++;
            }
            prevPtr.next = pointer.next;
        }
        size--;
    }

    return { getHead, getSize, append, remove }
}

export {LinkedList};