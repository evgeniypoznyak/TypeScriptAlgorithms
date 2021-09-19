/*
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
1431. Kids With the Greatest Number of Candies
Given the array candies and the integer extraCandies,
where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among
the kids such that he or she can have the greatest number of candies among them.
Notice that multiple kids can have the greatest number of candies.
 Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
 */

export const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  const max = Math.max(...candies);
  const result: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies < max) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
};
