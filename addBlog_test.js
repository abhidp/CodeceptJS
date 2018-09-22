/// <reference path="./steps.d.ts" />

Feature('Add Blog')

Scenario('Testing Login', (I) => {
  I.amOnPage('/')
  I.see('Log in')
  I.fillField('Email', 'abhi358@gmail.com')
  I.fillField('Password', 'ABHI@dp11')
  I.click('Log in')
  I.see('Add Blog')

  I.click('Add Blog')
  // I.see('New Blog')
  I.fillField('Status ', 'abc')
  I.click('Create Blog')
  I.click('Add Picture')
  I.attachFile('#attachment_image', 'upload.jpg')
  I.click('Create Attachment')
  I.click('Back')
  I.see('abc')
  I.click('Instagram')
  I.see('abc')
})


