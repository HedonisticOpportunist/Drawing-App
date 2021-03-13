from queue import Queue


class Exercises:
    """
    These exercises are from the revision sheet
    shared in the lecture
    """

    def __init__(self):
        self.threshold = 10
        self.is_divisible = False

        self.output = None
        self.queue = None

        self.queue_is_empty = True
        self.message_fibonacci = "Your number is smaller or equal to one"
        self.emoji = "／(＞×＜)＼ ／(＞×＜)＼ ／(＞×＜)＼"

        self.zero = 0

    def smaller_than(self, number: int) -> int:
        """
        Checks whether a number is above or
        below a certain threshold
        :param number:
        :return: The threshold number if it
        has been, otherwise the number itself
        is returned
        """
        if number < self.threshold:
            print("The number is smaller as the threshold.")
            print("ฅ(*ΦωΦ*) ฅ")
            return number
        else:
            print("The number is larger or the same as the threshold.")
            print("(*Φ皿Φ*)")
            return self.threshold

    def divisible_by_three(self, integer: int) -> bool:
        """
        Checks whether a number is divisible by
        three
        :param integer:
        :return: true if the number is divisible by three,
        false otherwise
        """
        if integer % 3 == 0:
            self.is_divisible = True
            print("The number is divisible by three.")
            print("^ↀᴥↀ^")
            return self.is_divisible
        else:
            print("The number is not divisible by three.")
            print("ლ(●ↀωↀ●)ლ")
            return self.is_divisible

    def greatest_common_divisor(self, integer_one: int, integer_two: int) -> int:
        """
        :param integer_one:
        :param integer_two:
        :return: The greatest common divisor
        """
        self.output = integer_one
        while self.output != integer_two:
            if self.output > integer_two:
                self.output = self.output - integer_two
            else:
                integer_two = integer_two - self.output
        if self.output == integer_two:
            print("The greatest common divisor is: " + str(self.output))
            print("(^・ω・^ )")
            return self.output

    def get_number_of_elements_in_queue(self, integer: int, other_integer: int) -> int:
        """
        A simple queue implementation
        :param integer:
        :param other_integer:
        :return: the number of elements in the queue
        """
        self.queue = Queue(maxsize=4)
        self.queue.put(integer)
        self.queue.put(other_integer)
        self.queue.get()
        size_of_queue = self.queue.qsize()
        print(size_of_queue)
        print("🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈")
        return size_of_queue

    def calculate_sum(self, queue) -> int:
        """
        Calculates the sum of all elements
        in a queue
        :param queue:
        :return: the sum if the queue
        is not empty
        """
        if len(queue) is None:
            print("The queue is empty: ")
            print("( >ω<)♡(>ω< ✿)")
            return self.queue_is_empty
        sum_of_queue = 0
        for i in range(0, len(queue)):
            sum_of_queue = sum_of_queue + queue[i]
        print("The sum of the queue is: " + str(sum_of_queue))
        print("(=•́ܫ•̀=)")
        return sum_of_queue

    def recursive_fibonacci(self, number: int) -> int:
        """
        An implementation of the fibonacci sequence
        using recursion
        :param number:
        :return:
        """
        if number <= 1:
            print(self.message_fibonacci)
            print("／(･ × ･)＼")
            return number
        else:
            print("We are recursive!")
            print("(￣Θ￣)")
            return self.recursive_fibonacci(number - 1) + self.recursive_fibonacci(number - 2)

    def print_sequence(self, sequence: int):
        """
        Prints out a sequence
        line by line
        :param sequence:
        :return: all the numbers within
        the fibonacci sequence
        """
        if sequence > 0:
            for i in range(0, sequence):
                print(self.recursive_fibonacci(i))
                print(self.emoji)

    def binary_search_square_root(self, number: int) -> bool:
        """
        A binary search algorithm that checks whether the square
        root of the number n is integer or otherwise
        :param number:
        :return:true if the square root is an integer,
        false otherwise
        """
        length = number - 1
        left = self.zero
        right = length - 1
        while right >= left:
            mid = left + (right - 1) // 2
            if mid * mid:
                print("The square root number is an integer.")
                print("<・ )))><< <・ )))><<<・ )))><<")
                return True
            elif mid * mid < number:
                self.zero = mid + 1
            else:
                print("The square root number is not an integer.")
                print("≧( ° ° )≦ ≧( ° ° )≦ ≧( ° ° )≦")
                right = mid - 1
        else:
            return False

    def recursive_sum(self, number: int) -> int:
        """
        A recursive implementation of adding up all the
        digits in a number
        :param number:
        :return: the sum of all the integers in
        the parameter number
        """
        if number <= 1:
            print("The sum of 1 equals 1:")
            print("(^◕ᴥ◕^ (^◕ᴥ◕^ (^◕ᴥ◕^")
            return number
        else:
            number += self.recursive_sum(number - 1)
            print("The sum is: " + str(number))
            print("ฅ(•ㅅ•❀)ฅ ฅ(•ㅅ•❀)ฅ ฅ(•ㅅ•❀)ฅ ฅ(•ㅅ•❀)ฅ")
            return number
