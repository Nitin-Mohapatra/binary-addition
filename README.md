# ➕ Add Binary Strings (Python)

This Python script implements binary string addition without using built-in binary conversion functions. It simulates bit-by-bit addition, similar to how we add binary numbers manually.

---

## 📘 Problem Statement

Given two binary strings `a` and `b`, return their **sum** as a binary string.

### Constraints:
- Inputs are non-empty strings containing only `'0'` or `'1'`.
- No use of built-in binary operations like `bin()` or `int(..., 2)`.

---

## 🧠 Approach

This solution performs binary addition **from right to left** (just like manual addition):

1. **Pad the shorter string** with leading zeros to match lengths.
2. Initialize a `carry` and an empty `sum` list.
3. Iterate over both strings from the end:
   - Add digits at the same index along with the carry.
   - Determine result bit and update carry accordingly.
4. After the loop, add the final carry if it exists.
5. Reverse the result and join to get the final binary sum.

## ⏱ Time & Space Complexity
Time Complexity: O(n)
n is the length of the longer binary string

Space Complexity: O(n)
For storing the result in a list
