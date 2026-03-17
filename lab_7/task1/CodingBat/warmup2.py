# 1
def string_times(str, n):
    return str * n
# 2
def last2(str):
    if len(str) < 2:
        return 0
    
    last = str[-2:]
    count = 0
    
    for i in range(len(str) - 2):
        if str[i:i+2] == last:
            count += 1
            
    return count
# 3
def array_count9(nums):
    return nums.count(9)
# 4
def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False
# 5
def string_bits(str):
    return str[::2]