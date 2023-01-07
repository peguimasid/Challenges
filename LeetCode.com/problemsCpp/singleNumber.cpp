#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  int singleNumber(vector<int>& nums) {
    for (int i = 0; i < nums.size(); i++) {
      int currentNumber = nums[i];
      int currentNumberFrequency = 0;
      for (int j = 0; j < nums.size(); j++) {
        if (nums[j] == currentNumber) currentNumberFrequency++;
      }
      if (currentNumberFrequency == 1) return currentNumber;
    }

    return 0;
  }
};

int main() {
  vector<int> vec;

  vec.push_back(2);
  vec.push_back(2);
  vec.push_back(1);

  Solution sol;

  cout << sol.singleNumber(vec) << endl;
}
