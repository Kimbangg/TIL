def solution(nums):
    result = []
    tmp = 1

    for i in range(0, len(nums)):
        result.append(tmp)
        tmp *= nums[i]

    tmp = 1

    for i in range(len(nums) - 1, 0 - 1, -1):
        result[i] *= tmp
        tmp *= nums[i]


nums = [1, 2, 3, 4]
solution(nums)
