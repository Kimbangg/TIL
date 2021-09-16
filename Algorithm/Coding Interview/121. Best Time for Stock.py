class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        price_min = prices[0]
        result = 0

        for price in prices:
            price_min = min(price_min, price)
            result = max(result, price - price_min)

        return result
