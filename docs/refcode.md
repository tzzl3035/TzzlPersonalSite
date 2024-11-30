# 参考代码

## ABC382

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
