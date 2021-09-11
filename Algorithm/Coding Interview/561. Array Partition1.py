class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:

        sum = 0
        nums.sort()

        for idx, value in enumerate(nums):
            if idx % 2 == 0:
                sum += value

        return sum
