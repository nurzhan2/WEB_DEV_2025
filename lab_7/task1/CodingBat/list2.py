# 1
def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count
# 2
def centered_average(nums):
    nums_sorted = sorted(nums)
    trimmed = nums_sorted[1:-1]
    return sum(trimmed) // len(trimmed)