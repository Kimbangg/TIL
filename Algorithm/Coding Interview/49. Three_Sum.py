class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        answer = []
        nums.sort()

        for start in range(len(nums) - 2):
            if start > 0 and nums[start] == nums[start-1]:
                continue

            left, right = start + 1, len(nums) - 1

            while left < right:
                sum = nums[start] + nums[left] + nums[right]

                if sum < 0:
                    left += 1
                elif sum > 0:
                    right -= 1
                else:
                    answer.append([nums[start], nums[left], nums[right]])

                    while left < right and nums[left] == nums[left + 1]:
                        left += 1

                    while left < right and nums[right] == nums[right-1]:
                        right -= 1

                    left += 1
                    right -= 1
        return answer
