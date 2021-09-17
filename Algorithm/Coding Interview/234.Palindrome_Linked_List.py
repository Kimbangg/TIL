# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def isPalindrome(self, head):
        my_list = []

        while head != None:
            val = head.val
            my_list.append(val)
            head = head.next
        if my_list == my_list[::-1]:
            return True

        return False
