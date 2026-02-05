# Lab-6.2: Promises and Error Handling Challenge 
**Author:** Jameka Haggins 
---

## Reflection Questions
1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
2. How does using custom error classes improve debugging and error identification?
3. When might a retry mechanism be more effective than an immediate failure response?

---

It allows for "Partial Success." If your app fails to fetch the product reviews, you can still show the user the product names and prices. If you only handle the error at the very end of a long chain, one single error will "break" the whole chain, and the user will see a blank screen instead of a mostly-working dashboard.

Custom errors are like specific labels on a box. If you just use the standard Error, it’s like a box labeled "Problem." If you use NetworkError or DataError, it’s like a box labeled "Internet Connection Issue" or "Missing Price Information." You immediately know where to start looking for the fix without reading every line of the code.

Retries are best for "Transient Errors" problems that are temporary and likely to fix themselves in a second. This usually happens with flaky internet connections or when a server is temporarily too busy. Instead of telling the user "It failed!", the app tries again quietly in the background. If it works on the second try, the user never even knew there was a problem.
