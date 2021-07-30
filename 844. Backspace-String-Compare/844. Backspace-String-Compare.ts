function backspaceCompare(s: string, t: string): boolean {
    let SDelCount: number = 0, TDelCount: number = 0;
    let i = s.length - 1, j = t.length - 1;

    while (!(i < 0) || !(j < 0)) {
        /* 寻找待比较元素的位置。
        遇到“#”，则计数器加一。
        遇到非“#”，则看计数器是否不为0：
            若计数器>0,则向前跳一位同时计数器减一，以此表示删除元素。
            若计数器=0，说明“#”用完了，此时下标就是待比较元素的位置。直接 break 退出该次循环。 */
        while (!(i < 0)) {
            if (s[i] === "#") {
                i--;
                SDelCount++;
            } else if (SDelCount) {
                i--;
                SDelCount--;
            } else {
                break;
            }
        }
        while (!(j < 0)) {
            if (t[j] === "#") {
                TDelCount++;
            } else if (TDelCount) {
                TDelCount--;
            } else {
                break;
            }
            j--;
        }

        // 比较元素，值相同则指针前进一位，值不同直接返回false
        if (s[i] !== t[j]) return false;

        i--;
        j--;
    }

    // 当i，j同时小于0（或等于-1）时，说明s和t删除元素之后都为空。返回true
    return true;
};