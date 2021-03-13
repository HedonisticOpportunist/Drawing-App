from exercises import Exercises
from exam_code import ExamCode

exercise = Exercises()

exercise.smaller_than(9)
exercise.divisible_by_three(2)

exercise.greatest_common_divisor(2, 3)
exercise.get_number_of_elements_in_queue(2, 3)

queue_to_test = [1, 1, 1, 1]
exercise.calculate_sum(queue_to_test)

terms = 10
exercise.print_sequence(terms)
exercise.binary_search_square_root(terms)

exercise.recursive_sum(16)

exam = ExamCode()
arr = [4, 8, 2, 8, 4]
exam.make_stack(arr)

palindrome_arr = [1, 2, 1]
non_palindrome = [1, 2, 3, 4]
exam.is_palindrome(palindrome_arr)
exam.is_palindrome(non_palindrome)

exam.is_palindrome_new(palindrome_arr)
exam.is_palindrome_new(non_palindrome)
