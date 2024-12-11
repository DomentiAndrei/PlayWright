Install Node.js or update it to last version
Install "playwright" - 'npm init playwright@latest'
run tests on UI  - 'npx playwright test  --ui' or 
run all tests using command 'npx playwright test' or also could be 
run a specific test 'npx playwright test "name of test" --ui'

________________Resources____________________
All pictures, Icons, Videos, and other file formats should be present in the Resources folder. If you want to edit a file name, you need to do so in the test, too.
_______________Allure Report_________________
Run test "npx playwright test --reporter=line,allure-playwright"
Generate Allure report "allure generate ./allure-results -o ./allure-report"
Open Allure report "allure open ./allure-report"

