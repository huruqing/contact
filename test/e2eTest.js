const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const driver = new webdriver.Builder().
withCapabilities({
	browserName: 'chrome',
	'chromeOptions':{
		args: ['test-type']
	}
}).build();
driver.get('http://127.0.0.1:8080/index');
driver.findElement(By.id('add')).click();
setTimeout(function () {
	driver.findElement(By.id('username')).sendKeys('huruqing');
	driver.findElement(By.id('submit')).click();
	driver.quit();
},3000)
