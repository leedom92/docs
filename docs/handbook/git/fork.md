# fork项目同步更新

> 当我们 fork 一个开源仓库之后，应该怎样将上游的仓库同步到我们的 `fork` 上呢？

::: tip 为复刻配置远程仓库

必须在 Git 中配置指向上游存储库的远程存储库，才能将你在分支中所做的更改同步到原始存储库。 这也允许您将在原始仓库中所做的更改同步到复刻中。
:::

**1. 打开终端。**

**2. 列出当前为复刻配置的远程仓库。**

  ```sh
  $ git remote -v
  > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

**3.指定将与分支同步的新远程上游存储库。**

  ```sh
  $ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
  ```

**4.验证为复刻指定的新上游仓库。**

  ```sh
  $ git remote -v
  > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

**5.从上游仓库中获取分支和它们各自的 `commits`。将 `BRANCHNAME` 上的 commit 存储在本地分支 `upstream/BRANCHNAME` 上。**

  ```sh
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

  **6.切换你fork的本地默认分支（在本例中，我们使用 `main` ）。**

  ```sh
  $ git checkout main
  > Switched to branch 'main'
  ```

  **7.将上游默认分支（在本例中为 `upstream/main` ）中的更改合并到本地默认分支中。这将使fork的默认分支与上游存储库同步，而不会丢失本地更改。**

  ```sh
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```

  **8.如果你本地没有任何提交，Git 将改为执行 `fast-forward` ：**

  ```sh
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

  ::: warning 注意
  同步你的 fork 仅仅只是更新了本地上对仓库的拷贝。如果要更新 GitHub 上你的 fork，则必须推送这些更改。
  :::
  
  ```sh
  $ git push
  ```