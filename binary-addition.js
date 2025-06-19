class Solution():
    def addBinary(self, a, b):
        sum = []
        carry = '0'
        length = 0

        if len(a) > len(b):
            length = len(a)
            b = '0' * (length - len(b)) + b
        else:
            length = len(b)
            a = '0' * (length - len(a)) + a

        while length > 0:
            aDigit = a[length - 1]
            bDigit = b[length - 1]

            if aDigit == '1' and bDigit == '1':
                if carry == '1':
                    sum.append('1')
                    carry = '1'
                else:
                    sum.append('0')
                    carry = '1'

            elif int(aDigit) ^ int(bDigit) == 1:
                if carry == '1':
                    sum.append("0")
                    carry = "1"
                else:
                    sum.append("1")  
            else:  
                if carry == '1':
                    sum.append('1')
                    carry = '0'
                else:
                    sum.append('0')

            length -= 1

        if carry == '1':
            sum.append('1')

        return ''.join(sum[::-1])

# Example usage
s1 = Solution()
