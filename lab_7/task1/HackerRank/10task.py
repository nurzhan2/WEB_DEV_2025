# 1
def hello():
    print("Hello, World!")

hello()
# 2
if __name__ == '__main__':
    n = int(input().strip())

    if n % 2 == 1:
        print("Weird")
    else:
        if 2 <= n <= 5:
            print("Not Weird")
        elif 6 <= n <= 20:
            print("Weird")
        else:
            print("Not Weird")
# 3
if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a + b)
    print(a - b)
    print(a * b)
# 4
if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a // b)
    print(a / b)
# 5
if __name__ == '__main__':
    n = int(input())

    for i in range(n):
        print(i * i)
# 6
def is_leap(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    return False
# 7
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = [[i, j, k] 
              for i in range(x + 1) 
              for j in range(y + 1) 
              for k in range(z + 1) 
              if i + j + k != n]

    print(result)
# 8
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    arr = list(set(arr))
    arr.sort()

    print(arr[-2])
# 9
if __name__ == '__main__':
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = sorted(set([s[1] for s in students]))
    second_lowest = scores[1]

    names = [s[0] for s in students if s[1] == second_lowest]
    names.sort()

    for name in names:
        print(name)
# 10
if __name__ == '__main__':
    n = int(input())
    student_marks = {}

    for _ in range(n):
        data = input().split()
        name = data[0]
        marks = list(map(float, data[1:]))
        student_marks[name] = marks

    query_name = input()

    avg = sum(student_marks[query_name]) / len(student_marks[query_name])
    print(f"{avg:.2f}")