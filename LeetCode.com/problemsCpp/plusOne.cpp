#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<int> plusOne(vector<int>& digits) {
    int sum = 0;

    for (int i = 0; i < digits.size(); i++) {
      sum *= 10;
      sum += digits.at(i);
    }

    vector<int> result;
    sum += 1;

    while (sum > 0) {
      result.insert(result.begin(), (sum % 10));
      sum /= 10;
    }

    return result;
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
