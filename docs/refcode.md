# 参考代码

## [ABC382](https://atcoder.jp/contests/abc382)

### A
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int N, D;
  std::cin >> N >> D;
  std::string S; std::cin >> S;
  int cou = 0;
  for(char c: S) {
    if(c == '@') ++cou;
  }
  std::cout << N - cou + D;

  return 0;
}
```
### B
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int N, D;
  std::cin >> N >> D;
  std::string S; std::cin >> S;
  for(int i = S.size()-1; D && i > -1; --i)
    if(S[i] == '@') 
      S[i] = '.', --D;
  std::cout << S;

  return 0;
}
```
### C
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int N, M; std::cin >> N >> M;
  std::vector<int> A(N);
  std::vector<std::pair<int, int>> B(M);
  for(int i = 0; i < N; ++i) 
    std::cin >> A[i];
  for(int i = 0; i < M; ++i) { 
    std::cin >> B[i].first;
    B[i].second = i;
  }
  std::vector<int> ans(M, -1);
  std::sort(B.begin(), B.end(), std::greater<std::pair<int, int>>());
  for(int i=0, j=0; i<N && j<M; ++i) {
    for(; j < M && B[j].first >= A[i]; ) {
      ans[B[j++].second] = i+1;
      if(j >= M) break;
    }
    if(j >= M) break;
  }
  for(int i = 0; i < M; ++i) 
    std::cout << ans[i] << '\n';

  return 0;
}
```
### D
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int N, M; std::cin >> N >> M;
  std::vector<int> ans(N);
  std::vector<std::vector<int>> res;
  auto dfs = [&](auto &dfs, int x) -> void {
    if(x == N) {
      res.push_back(ans);
      return ;
    }
    int i;
    if(x == 0) i = 1;
    else i = ans[x-1] + 10;
    for(; i <= M - (N-x-1) * 10; ++i) {
      ans[x] = i;
      dfs(dfs, x+1);
    }
  };
  dfs(dfs, 0);
  std::cout << res.size() << '\n';
  for(int i = 0; i < res.size(); ++i) {
    for(int j = 0; j < N; ++j) {
      std::cout << res[i][j] << ' ';
    }
    std::cout << '\n';
  }

  return 0;
}
```

## [CF2034](https://codeforces.com/contests/2034)

### A
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int t; std::cin >> t;
  for(; t; --t) {
    int a, b; std::cin >> a >> b;
    std::cout << a * b / __gcd(a, b) << '\n';
  }

  return 0;
}
```
### B
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int t; std::cin >> t;
  for(; t; --t) {
    int n, m, k;
    std::cin >> n >> m >> k;
    std::string s;
    std::cin >> s;
    s += '1';
    int ans = 0, tmp = 0;
    for(int i = 0; i <= n; ++i) {
      if(s[i] == '0') ++tmp;
      else tmp = 0;
      if(tmp == m) {
        for(int j = i; j < std::min(n, k+i); ++j) 
          s[j] = '1';
        tmp = 0, i = std::min(n, k+i)-1, ++ans;
      }
    }
    std::cout << ans << '\n';
  }

  return 0;
}
```

## ABC383

### A
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int N, T, V;
  std::cin >> N;
  int wat = 0, bT = 0;
  for(int i = 0; i < N; ++i) {
     std::cin >> T >> V;
     wat = std::max(0, wat - (T - bT));
     wat += V;
     bT = T;
  }
  std::cout << wat;

  return 0;
}
```
### B
```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  int H, W, D;
  std::cin >> H >> W >> D;
  std::string s;
  for(int i = 0; i < H; ++i) {
    std::string tem;
    std::cin >> tem;
    s += tem;
  }
  std::vector<std::set<int>> a(H*W);
  for(int i = 0; i < H*W; ++i) {
    if(s[i] == '#') continue;
    for(int j = 0; j < H*W; ++j) {
      if(s[j] == '#') continue;
      int ix = i / W, jx = j / W;
      int iy = i - ix * W, 
          jy = j - jx * W;
      if(abs(jx - ix) + abs(jy - iy) <= D) 
        a[i].insert(j);
    }
  }
  int ans = 0;
  for(int i = 0; i < H*W; ++i) {
    for(int j = 0; j < H*W; ++j) {
      if(i == j) continue;
      std::set<int> st;
      for(auto x: a[i]) 
        st.insert(x);
      for(auto x: a[j]) 
        st.insert(x);
      ans = std::max(ans, (int)st.size());
    }
  }
  std::cout << ans;

  return 0;
}
```
### C
```cpp
#include <bits/stdc++.h>
using ll = long long;
using pii = std::pair<int, int>;
using pll = std::pair<long, long>;
using namespace std;

int main() {
  std::ios::sync_with_stdio(0);
  std::cin.tie(nullptr);

  // TLE
  int H, W, D;
  std::cin >> H >> W >> D;
  std::string s;
  for(int i = 0; i < H; ++i) {
    std::string tem;
    std::cin >> tem;
    s += tem;
  }
  std::set<int> ans;
  /*
  std::vector<bool> vis(H*W);
  auto dfs = [&](auto &dfs, int pla, int ste) -> void {
    if(pla < 0 || pla >= H*W || s[pla] == '#' || vis[pla] || ste > D) 
      return ;
    vis[pla] = 1;
    ans.insert(pla);
    if(pla%W != 0) dfs(dfs, pla-1, ste+1);
    if(pla%W != W-1) dfs(dfs, pla+1, ste+1);
    dfs(dfs, pla+W, ste+1);
    dfs(dfs, pla-W, ste+1);
    vis[pla] = 0;
  };
  */
  for(int i = 0; i < H*W; ++i) {
    if(s[i] == 'H') {
      std::vector<bool> vis(H*W);
      std::queue<pii> que;
      que.push({i, 0});
      for(; !que.empty(); ) {
        pii tem = que.front();
        que.pop();
        int pla = tem.first, 
          ste = tem.second;
        if(pla < 0 || pla >= H*W || s[pla] != '.' && ste != 0 || vis[pla] || ste > D) 
          continue;
        vis[pla] = 1;
        ans.insert(pla);
        if(pla%W != 0) que.push({pla-1, ste+1});
        if(pla%W != W-1) que.push({pla+1, ste+1});
        que.push({pla+W, ste+1});
        que.push({pla-W, ste+1});
      }
    }
  }
  std::cout << ans.size();

  return 0;
}
```
