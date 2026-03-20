from models import Animal, Dog, Cat


def main():
    animal = Animal("Generic Animal", 5, "gray" , "cfjcio")
    dog = Dog("Buddy", 3, "brown" , "labrador")
    cat = Cat("Misty", 2, "white", 9 , "hdcioe")

    print( dog.breed)

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

        
        print( a.breed)
    


if __name__ == "__main__":
    main()
    