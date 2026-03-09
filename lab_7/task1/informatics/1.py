#A
import math

a = int(input())
b = int(input())

c = math.sqrt(a**2 + b**2)

print(c)

#B

def next_prev(n):
    print("The next number for the number", n, "is", n + 1, sep=' ', end='.\n')
    print("The previous number for the number", n, "is", n - 1, sep=' ', end='.')

n = int(input())
next_prev(n)

#C

def apples(n, k):
    print(k // n)

n = int(input())
k = int(input())

apples(n, k)

#D
def apples_left(n, k):
    print(k % n)

n = int(input())
k = int(input())

apples_left(n, k)


#E

def mkad(v, t):
    print((v * t) % 109)

v = int(input())
t = int(input())

mkad(v, t)