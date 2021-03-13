import math


class ExamCode:
    """
    This code is related to any pseudo related
    questions found in previous exam papers and / or
    practice exams
    """

    def __init__(self):
        self.message = ""

    def make_stack(self, numbers):
        """
        Create a stack out of a given array
        :param numbers:
        :return:
        """
        array_length = len(numbers)
        new_stack = []

        for i in range(math.floor(array_length / 2)):
            new_stack.append(numbers[i])

        self.message = "The stack is: " + str(new_stack)
        print(self.message)
        print("\ō͡≡o˞̶ \ō͡≡o˞̶ \ō͡≡o˞̶ \ō͡≡o˞̶")
        return new_stack

    def is_palindrome(self, array) -> bool:
        """
        Checks whether a given array is a palindrome
        :param array:
        :return: true if the array is a palindrome, false otherwise
        """
        if len(array) == 1:
            print("We have a palindrome here of length 1:")
            print("∪･ｪ･∪ ∪･ｪ･∪ ∪･ｪ･∪ ∪･ｪ･∪")
            return True
        else:
            palindrome_stack = self.make_stack(array)
            range_of_stack = math.floor(len(array)) + 1
            for i in range(range_of_stack, len(array)):
                if palindrome_stack[-1] != array[i]:
                    print("This array is not a palindrome.")
                    print("(－_－) zzZ (－_－) zzZ (－_－) zzZ")
                    return False
                palindrome_stack.pop()
            print("This array is a palindrome.")
            print("／(≧ x ≦)＼ ／(≧ x ≦)＼ ／(≧ x ≦)＼")
            return True

    def recursive_palindrome(self, array, left: int, right: int) -> bool:
        """
        A recursive implementation of checking
        whether an array is a palindrome
        :param array:
        :param left:
        :param right:
        :return: true if the array is a palindrome,
        false otherwise
        """
        if right <= left:
            self.message = "The array is a palindrome"
            print(self.message)
            print("( ˘▽˘)っ♨ ( ˘▽˘)っ♨ ( ˘▽˘)っ♨")
            return True
        if array[left] != array[right]:
            self.message = "The array is not a palindrome"
            print(self.message)
            print("-●●●-ｃ(・・ ) -●●●-ｃ(・・ ) -●●●-ｃ(・・ ) -●●●-ｃ(・・ )")
            return False
        print("The array is a palindrome.")
        print("( ・・)つ―●○◎- ( ・・)つ―●○◎- ( ・・)つ―●○◎-")
        return True

    def is_palindrome_new(self, array) -> bool:
        """
        Checks whether a given array is a palindrome
        :param array:
        :return:True if the array is a palindrome, false otherwise
        """
        length = len(array)
        return self.recursive_palindrome(array, 0, length - 1)



