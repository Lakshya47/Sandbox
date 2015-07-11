Author: Lakshya Chaudhary
Date: 11-7-2105


I have created a small working prototype using AngularJS of the Shopping Application provided in the visual designs:-

2.1 Retail Product Page A (Control)
2.3 Retail Product Page C
7.1 Mobile Product Page A (Control) copy
7.3 Mobile Product Page C

1. The prototype contains two pages index.html and index2.html based on the different VDs (Page A and Page C).

2. I have used AngularJS to fetch shopping items from a dummy JSON stub (shoppingitems.json) located at root folder.

3. CSS is written using SASS preprocessor.

4. Firefox will smoothly run these HTMLs if index.html file is opened directly.

5. Chrome won't run these HTMLs if index.html file is opened directly because app uses HTTP call for rendering partials and getting JSON stubs. Chrome doesn't allow local file system calls and hence these HTMLs won't run. These HTMLs need to be put on a Web Server to run on Chrome.

6. I have written basic Jasmine test cases located at "resources/js/app/tests/". Karma config file is located at root folder.