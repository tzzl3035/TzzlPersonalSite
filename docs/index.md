<script setup>
  import { reactive } from 'vue'
  const tip = reactive({
  })
</script>

# TzzlStudio Site

这是[TzzlStudio](https://www.luogu.com.cn/team/82054#main)的资源站，由[tzzl3035](https://www.luogu.com.cn/user/1030559)开发。

::: tip 最近事项
<ul>
  <li v-for="(val, key) in tip">
    <a :href="val">{{key}}</a>
  </li>
</ul>
:::

## 各比赛赛时代码参考
[参考代码链接](/refcode)

## 友情链接
- [TzzlStudio in Codeforces](https://codeforces.com/group/ehqDq1wqEf/contests)
- 可加入由成员[wangzc2012](https://www.luogu.com.cn/user/1221613)创建的QQ群聊: 753265027
- [Luogu](https://www.luogu.com.cn)
- [Atcoder](https://atcoder.jp)
- [Codeforces](https://codeforces.com)
- [oier.team](https://oier.team/)
- [OI-Wiki](https://oi-wiki.org)
- [Watt Toolkit](https://steampp.net/)
- [千万别点](/bbjiyu.exe)

## 模板代码 可自行拷贝
```cpp
#include <bits/stdc++.h>
using ll = long long;
using pii = std::pair<int, int>;
using pll = std::pair<long, long>;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  // Sth. to do

  return 0;
}
```
