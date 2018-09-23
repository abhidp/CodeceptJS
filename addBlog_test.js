/// <reference path="./steps.d.ts" />

Feature('Add Blog')

Scenario('Testing Login', (I) => {
  //login
  I.amOnPage('/')
  I.see('Log in')
  I.fillField('Email', '')
  I.fillField('Password', '')
  I.click('Log in')

  //add blog
  I.see('Add Blog')
  I.click('Add Blog')
  I.fillField('Status ', 'Cute Puppies')
  I.click('Create Blog')

  //attach picture
  I.click('Add Picture')
  I.see('Image')
  I.wait(2)
  I.waitForVisible('#attachment_image')
  I.attachFile('#attachment_image', 'puppy.jpg')
  I.click('Create Attachment')
  I.waitForVisible('#notice')
  I.see('Attachment was successfully created.')

  //back to homepage
  I.click('Instagram')
  I.see('Cute Puppies')
})