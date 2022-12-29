#include <iostream>
#include <vector>

using namespace std;

class Solution {
 private:
  vector<int> kEqualZero(vector<int>& code) {
    vector<int> result(code.size(), 0);
    return result;
  }
  vector<int> kSmallerThanZero(vector<int>& code, int k) {
    vector<int> result;
    k = -k;

    for (int i = 0; i < code.size(); i++) {
      int sum = 0;
      for (int j = 1; j <= k; j++) {
        sum += code[(i - j + code.size()) % code.size()];
      }
      result.push_back(sum);
    }

    return result;
  }
  vector<int> kBiggerThanZero(vector<int>& code, int k) {
    vector<int> result;

    for (int i = 0; i < code.size(); i++) {
      int sum = 0;
      for (int j = i; j < i + k; j++) {
        sum += code.at((j + 1) % code.size());
      }
      result.push_back(sum);
    }

    return result;
  }

 public:
  vector<int> decrypt(vector<int>& code, int k) {
    if (k > 0) return this->kBiggerThanZero(code, k);
    if (k < 0) return this->kSmallerThanZero(code, k);
    return this->kEqualZero(code);
  }
};

int main() {
  vector<int> code;
  code.push_back(2);
  code.push_back(4);
  code.push_back(9);
  code.push_back(3);

  vector<int> result = (new Solution())->decrypt(code, -2);

  for (int i = 0; i < result.size(); i++) {
    cout << result[i] << endl;
  }
}
// int main() {
//   vector<int> code;
//   code.push_back(1);
//   code.push_back(2);
//   code.push_back(3);
//   code.push_back(4);

//   vector<int> result = (new Solution())->decrypt(code, 0);

//   for (int i = 0; i < result.size(); i++) {
//     cout << result[i] << endl;
//   }
// }
// int main() {
//   vector<int> code;
//   code.push_back(5);
//   code.push_back(7);
//   code.push_back(1);
//   code.push_back(4);

//   vector<int> result = (new Solution())->decrypt(code, 3);

//   for (int i = 0; i < result.size(); i++) {
//     cout << result[i] << endl;
//   }
// }
