# 1
def double_char(str):
    result = ''
    for ch in str:
        result += ch * 2
    return result
# 2
def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)
# 3
def count_hi(str):
    return str.count("hi")
# 4
def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1
    return count
# 5
def cat_dog(str):
    return str.count("cat") == str.count("dog")