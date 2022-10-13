var removeNthFromEnd = function(head, n) {
    var fast = head;
    var slow = head;
    var slowPrev = head;
    var depth = 1;
    
    while(fast.next){
        fast = fast.next
        if(n <= depth) slow = slow.next;
        if(n < depth) slowPrev = slowPrev.next;
        depth++;
    } 
    slowPrev.next = slow.next;
    
    if(depth == n) return head.next;
    else return head;
};