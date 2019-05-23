// eslint-disable-next-line
import React from 'react'
import { Toaster } from "@blueprintjs/core";

function validateEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// and here is the code to initialize Blueprint's notification component
// remember to add "Toaster" to the components you are importing from Blueprint
const Alerts = Toaster.create({
  position: 'top',
})

export {validateEmail, Alerts}