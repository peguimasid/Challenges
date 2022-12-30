#include <iostream>
#include <limits>
#include <vector>

using namespace std;

class Solution {
 public:
  int getMinDistance(vector<int>& nums, int target, int start) {
    int result = INT_MAX;

    for (int i = 0; i < nums.size(); i++) {
      if (nums[i] == target && abs(i - start) <= result) {
        result = abs(i - start);
      }
    }

    return result;
  }
};

int main() {
  vector<int> vec(10, 1);

  cout << (new Solution())->getMinDistance(vec, 1, 0) << endl;
}
