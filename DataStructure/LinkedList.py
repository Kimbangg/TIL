class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:

    def _init_(self, data):
        self.head = Node(data)

    def append(self, data):
        cur = self.head

        while cur.next is not None:
            cur = cur.next
        cur.next = Node(data)

    def get_node(self, idx):
        cnt = 0
        node = self.head

        while cnt < idx:
            cnt += 1
            node = node.next

        return node

    def add_node(self, idx, value):
        new_node = Node(value)

        if (idx == 0):
            new_node.next = self.head
            self.head = new_node
            return

        node = self.get_node(idx-1)
        next_node = node_next
        node_next = new_node
        new_node.next = next_node

    def delete_node(self, index):
        if index == 0:
            self.head = self.head.next
            return
        node = self.get_node(index-1)
        node.next = node.next.next
