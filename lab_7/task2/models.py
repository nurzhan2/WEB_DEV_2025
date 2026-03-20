class Animal:
    def __init__(self, name, age, color , breed):
        self.name = name
        self.age = age 
        self.color = color
        self.breed = breed

    def speak(self):
        return f"{self.name} makes a sound."

    def move(self):
        return f"{self.name} is moving."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color, breed)


    def speak(self):
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball."

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color, lives_left , breed):
        super().__init__(name, age, color, breed)
        self.lives_left = lives_left

    def speak(self):
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} is climbing a tree."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, lives_left={self.lives_left})"