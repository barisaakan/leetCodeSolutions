var middleNode = function(head) {
    var slow = head;
    var fast = head;
    
    while(fast.next){
        fast = fast.next;
        if(fast.next) fast = fast.next;
        slow = slow.next;
    }
    return slow;
};