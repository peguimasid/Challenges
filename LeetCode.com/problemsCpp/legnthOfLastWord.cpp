#include <iostream>

using namespace std;

class Solution {
 public:
  int lengthOfLastWord(string s) {
    int i = s.size() - 1;
    while (i >= 0 && s[i] == ' ') i--;
    int j = i;
    while (j >= 0 && s[j] != ' ') j--;
    return i - j;
  }
};

int main() {
  Solution solution;

  cout << solution.lengthOfLastWord("a ") << endl;
  cout << solution.lengthOfLastWord("Hello World") << endl;
  cout << solution.lengthOfLastWord("   fly me   to   the moon  ") << endl;
  cout << solution.lengthOfLastWord("luffy is still joyboy") << endl;
}
