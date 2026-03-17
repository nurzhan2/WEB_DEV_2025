# 1
def sleep_in(weekday, vacation):
    return not weekday or vacation
# 2
def diff21(n):
    if n > 21:
        return 2 * abs(n - 21)
    return abs(n - 21)
# 3
def near_hundred(n):
    return abs(n - 100) <= 10 or abs(n - 200) <= 10
# 4
def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    return (a < 0 and b > 0) or (a > 0 and b < 0)
# 5
def front3(str):
    front = str[:3]
    return front * 3


