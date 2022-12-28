#include <iostream>

using namespace std;

class Solution {
 public:
  bool areOccurrencesEqual(string s) {
    int firstOcurrence = 1;
    char first = s.at(0);

    for (int i = 1; i < s.length(); i++) {
      if (s[i] == first) firstOcurrence++;
    }

    for (int i = 0; i < s.length(); i++) {
      int currentOcurrence = 1;
      for (int j = 0; j < s.length(); j++) {
        if (i != j && s[i] == s[j]) currentOcurrence++;
      }
      if (currentOcurrence != firstOcurrence) return false;
    }

    return true;
  }
};

int main() {
  cout << (new Solution())->areOccurrencesEqual("abacbc") << endl;
  cout << (new Solution())->areOccurrencesEqual("aaabb") << endl;
}
