#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
 public:
  int minDeletionSize(vector<string>& strs) {
    int result = 0;

    for (int i = 0; i < strs[0].size(); i++) {
      for (int j = 0; j < strs.size() - 1; j++) {
        if (strs[j][i] > strs[j + 1][i]) {
          result++;
          break;
        }
      }
    }

    return result;
  }
};

int main() {
  vector<string> strs;

  strs.push_back("abc");
  strs.push_back("bce");
  strs.push_back("cae");

  Solution sol;

  cout << sol.minDeletionSize(strs) << endl;
}
