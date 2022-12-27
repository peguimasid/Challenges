#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<int> plusOne(vector<int>& digits) {
    int i = digits.size() - 1;
    while (i >= 0 && digits[i] == 9) digits[i--] = 0;
    if (i < 0) {
      digits.push_back(0);
      i++;
    };
    digits[i]++;
    return digits;
  }
};

int main() {
  Solution solution;

  vector<int> vect;

  vect.push_back(1);
  vect.push_back(2);
  vect.push_back(3);

  vector<int> result = solution.plusOne(vect);

  for (int i = 0; i < vect.size(); i++) {
    cout << result[i] << endl;
  }
}
