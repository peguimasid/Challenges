#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  bool areOccurrencesEqual(string s) {
    vector<int> frequencyCounter(26, 0);

    for (int i = 0; i < s.size(); i++) frequencyCounter[s[i] - 'a']++;

    int firstFrequency = frequencyCounter[s[0] - 'a'];

    for (int i = 0; i < frequencyCounter.size(); i++) {
      int currentFrequency = frequencyCounter[i];

      if (firstFrequency != currentFrequency and currentFrequency != 0) return false;
    }

    return true;
  }
};

int main() {
  cout << (new Solution())->areOccurrencesEqual("abacbc") << endl;
  cout << (new Solution())->areOccurrencesEqual("aaabb") << endl;
}
