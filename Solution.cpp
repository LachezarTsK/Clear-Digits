
#include <string>
using namespace std;

class Solution {

public:
    string clearDigits(const string& input) const{
        string clearDigits;

        for (const auto& current : input) {
            if (isdigit(current) && !clearDigits.empty()) {
                clearDigits.pop_back();
                continue;
            }
            clearDigits.push_back(current);
        }

        return clearDigits;
    }
};
