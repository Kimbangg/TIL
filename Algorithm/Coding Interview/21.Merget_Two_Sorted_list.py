# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        my_list = []

        while l1 != None:
            my_list.append(int(l1.val))
            l1 = l1.next

        while l2 != None:
            my_list.append(int(l2.val))
            l2 = l2.next

        answerList = None
        my_list = list(sorted(my_list))

        for i in range(len(my_list)):
            if i == 0:
                answerList = ListNode(my_list[i])
            else:
                new_node = ListNode(my_list[i])
                currNode = answerList
                while currNode.next != None:
                    currNode = currNode.next
                currNode.next = new_node

        return answerList
