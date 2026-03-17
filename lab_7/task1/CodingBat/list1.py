# 1
def max_end3(nums):
    m = max(nums[0], nums[-1])
    return [m, m, m]
# 2
def has23(nums):
    return 2 in nums or 3 in nums