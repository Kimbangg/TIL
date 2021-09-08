def solution(nums, target):
    vals = {}
    for i in range(len(nums)):
        if nums[i] in vals:
            return [vals[nums[i]], i]
        vals[target-nums[i]] = i


nums = [2, 7, 11, 15]
target = 9
print(solution(nums, target))
