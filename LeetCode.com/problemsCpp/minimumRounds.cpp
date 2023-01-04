#include <cmath>
#include <iostream>
#include <map>
#include <vector>

using namespace std;

class Solution {
 public:
  int minimumRounds(vector<int>& tasks) {
    map<int, int> frequency;
    for (int i = 0; i < tasks.size(); i++) {
      frequency[tasks[i]]++;
    }

    int result = 0;

    for (auto& it : frequency) {
      if (it.second == 1) return -1;
      result += ceil(it.second / 3.0);
    }

    return result;
  }
};

int main() {
  vector<int> tasks;
  tasks.push_back(2);
  tasks.push_back(2);
  tasks.push_back(3);
  tasks.push_back(3);
  tasks.push_back(2);
  tasks.push_back(4);
  tasks.push_back(4);
  tasks.push_back(4);
  tasks.push_back(4);
  tasks.push_back(4);

  Solution sol;

  cout << sol.minimumRounds(tasks) << endl;
}
