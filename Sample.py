def sum_of_evens(numbers):
    even_sum = 0
    for num in numbers:
        if num % 2 == 0:
            even_sum += num
    return even_sum

if __name__ == '__main__':
    num_list = [2, 4, 7, 8, 10, 13, 14, 16, 19]
    result = sum_of_evens(num_list)
    print(f"The sum of all even numbers in the list {num_list} is: {result}")
