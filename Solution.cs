
using System;

public class Solution
{
    public string ClearDigits(string input)
    {
        StringBuilder clearDigits = new StringBuilder();

        foreach (char current in input)
        {
            if (Char.IsDigit(current) && clearDigits.Length > 0)
            {
                clearDigits.Remove(clearDigits.Length - 1, 1);
                continue;
            }
            clearDigits.Append(current);
        }

        return clearDigits.ToString();
    }
}
