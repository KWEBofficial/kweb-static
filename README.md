# kweb-view
View for kweb website

## 브랜치 전략

평소:
1. develop에서 feature 브랜치 따서 작업
2. 로컬 테스트 후 develop으로 PR
3. Approve 후 develop 머지
4. develop을 main에 머지

핫픽스:
1. main에서 hotfix 브랜치 따서 작업
2. 로컬 테스트 후 main으로 PR
3. Approve 후 main 머지
4. main을 develop에 머지

## contributing
Contributing guideline for this repository

### Developer guidelines
- Setup
  - ``sh setup_local.sh``
- Branch Usage
  - The main branch should not be modified except for the release purpose
  - Make a branch from develop branch for make changes
  - Repository name should be like following format
    - ``feature/<issue_number>``
    - ``feature/<feature_name>``
    - ``release/<version_number>``
    - ``hotfix/<issue_number>``
- Coding Convention
  - Not decided yet
- Commit Message
  - Commit with the smallest change unit
  - Use category in commit messages
    - ``int``: only for initial commit
    - ``doc``: changes document or comment
    - ``ftr``: add new feature
    - ``mod``: modify existing feature
    - ``fix``: fix an error or issue
    - ``rfc``: refactor code
    - ``add``: add new file or directory
    - ``rmv``: remove existing file or directory
  - Example
    - ```int: initial commit```
