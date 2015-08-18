module.exports = {
  'Demo test Ems App' : function (client) {
    client
      .url('http://172.27.59.112:5024/EmployeeApplicationSprint4-1.0-SNAPSHOT')
      .waitForElementVisible('body', 1000)
     .verify.urlEquals('http://172.27.59.112:5024/EmployeeApplicationSprint4-1.0-SNAPSHOT/')
     // .assert.visible("#ListEmployeeLink")
      .click("#ListEmployeeLink")
     .pause(5000)
      .verify.elementPresent("body > div.smart-green > table > tbody > tr:nth-child(4) > td:nth-child(5) > a")
    //.verify.elementPresent("body > div.smart-green > table > tbody > tr:nth-child(6) > td:nth-child(5) > a")
     .end();
  }
    
   
};
/*module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('ol#rso li:first-child',
        'Rembrandt - Wikipedia')
      .end();
  }
};*/

