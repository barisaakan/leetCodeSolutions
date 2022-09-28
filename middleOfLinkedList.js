var middleNode = function(head) {
    var fast = head;
    var slow = head;
    
    while(fast){
        fast = fast.next;
        if(fast) fast = fast.next;
        else break;
        slow = slow.next;
    }
    return slow;
};