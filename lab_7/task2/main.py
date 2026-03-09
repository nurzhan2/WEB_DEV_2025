from models import Animal, Dog, Cat


def main():
    animal = Animal("Generic Animal", 5, "gray")
    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Misty", 2, "white", 9)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.speak())   # polymorphism
        print(a.move())

        if isinstance(a, Dog):
            print(a.fetch())
        elif isinstance(a, Cat):
            print(a.climb())

        print("-" * 40)


if __name__ == "__main__":
    main()
    